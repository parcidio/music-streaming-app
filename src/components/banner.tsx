import { View, ImageStyle, ViewStyle, Image, ScrollViewProps } from "react-native"
import React, { useState, useEffect, useRef } from "react"
import { WIDTH } from "../theme/index"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  useAnimatedRef,
} from "react-native-reanimated"
import BannerPagination from "./pagination"

export type BannerDataType = {
  image?: string
  type?: string
  ksId: string
  title?: string
  subtitle?: string
}

interface HomeBannerProps extends ScrollViewProps {
  items: BannerDataType[]
  /**
   * boolean value to activate pagination for the banner
   */
  pagination: boolean
  /**
   * boolean value for the autoPlay feature for the banner (currently experimental and with known issue)
   */
  autoPlay?: boolean
}

const HomeBanner: React.FC<HomeBannerProps> = ({ items, pagination, autoPlay = false }) => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>()
  // @ts-ignore
  const interval = useRef<Timer>()
  const containerSize = WIDTH * 0.8
  const [bannerSpacerData] = useState<BannerDataType[]>([
    { ksId: "spcLeft" },
    ...items,
    { ksId: "spcRight" },
  ])
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(autoPlay)
  const spaceSize = (WIDTH - containerSize) / 2
  const x = useSharedValue(0)
  const offSet = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      x.value = e.contentOffset.x
    },
  })
  useEffect(() => {
    if (isAutoPlay) {
      let _offSet = offSet.value
      interval.current = setInterval(() => {
        if (_offSet >= Math.floor(containerSize * (items.length - 1) - 10)) _offSet = 0
        else _offSet = Math.floor(_offSet + containerSize)
        // scrollViewRef.current.scrollTo({ x: _offSet, y: 0 })
      }, 4000)
    } else {
      clearInterval(interval.current)
    }
  }, [containerSize, items.length, isAutoPlay, offSet.value])

  return (
    <>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        onScrollBeginDrag={() => setIsAutoPlay(false)}
        onMomentumScrollEnd={(e) => {
          offSet.value = e.nativeEvent.contentOffset.x
          setIsAutoPlay(false)
        }}
        snapToInterval={containerSize}
        decelerationRate="fast"
        onScroll={onScroll}
        contentContainerStyle={$SVContent}
      >

        {bannerSpacerData.map((item, index) => {
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * containerSize, (index - 1) * containerSize, index * containerSize],
              [0.86, 1, 0.86],
            )
            return {
              transform: [{ scale }],
            }
          })

          if (!item.image) {
            return <View style={{ width: spaceSize }} key={index} />
          }
          return (
            <View style={{ width: containerSize }} key={index}>

              <Animated.View style={[$ImageBannerWrapper, style]}>
                <Image source={{ uri: item.image }} style={$ImageBanner} />
              </Animated.View>
            </View>
          )
        })}
      </Animated.ScrollView>
      {pagination && <BannerPagination data={items} scrollX={x} size={containerSize} />}
    </>
  )
}

const $SVContent: ViewStyle = { paddingTop: 20 }



const $ImageBannerWrapper: ViewStyle = {
  overflow: "hidden",
  borderRadius: 10,
}

const $ImageBanner: ImageStyle = {
  width: "100%",
  height: undefined,
  aspectRatio: 16 / 9,
}

export { HomeBanner }
