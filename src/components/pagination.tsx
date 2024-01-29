import { View, ViewProps, ViewStyle } from "react-native"
import React from "react"
import { BannerDataType } from "./banner"
import Animated, {
  SharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated"
import { spacing } from "../theme"

interface BannerPaginationProps extends ViewProps {
  data: BannerDataType[]
  scrollX: SharedValue<number>
  size: number
}
const BannerPagination: React.FC<BannerPaginationProps> = ({ data, scrollX, size }) => {
  return (
    <View style={$PaginationWrapper}>
      {data.map((_, i) => {
        const style = useAnimatedStyle(() => {
          const width = interpolate(
            scrollX.value,
            [(i - 1) * size, i * size, (i + 1) * size],
            [10, 20, 10],
            Extrapolate.CLAMP,
          )
          const opacity = interpolate(
            scrollX.value,
            [(i - 1) * size, i * size, (i + 1) * size],
            [0.5, 1, 0.5],
            Extrapolate.CLAMP,
          )
          return {
            width,
            opacity,
          }
        })
        return <Animated.View key={i} style={[$PaginationItem, style]} />
      })}
    </View>
  )
}

const $PaginationWrapper: ViewStyle = {
  flexDirection: "row",
  height: 20,
  justifyContent: "center",
  alignItems: "center",
}
const $PaginationItem: ViewStyle = {
  height: spacing.extraSmall,
  width: spacing.extraSmall,
  backgroundColor: 'black',
  marginHorizontal: spacing.tiny + 2,
  borderRadius: 100,
}
export default BannerPagination
