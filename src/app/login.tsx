// import {
//     View,
//     TextStyle,
//     ViewStyle,
//     Image,
//     StyleProp,
//     ImageStyle,
//     TouchableOpacity,
//     Alert,
// } from "react-native"
// import React, { useEffect, useMemo, useRef, useState, useCallback } from "react"
// import { Button, Screen, Text, TextField, AutoImage } from "@/src/components/mini"
// import { spacing, WIDTH, HEIGHT } from "@/src/theme"
// import Animated, {
//     Easing,
//     useSharedValue,
//     withTiming,
//     useAnimatedStyle,
//     AnimatedStyleProp,
// } from "react-native-reanimated"
// import {
//     BottomSheetModal,
//     BottomSheetFlatList,
//     BottomSheetSectionList,
//     BottomSheetBackdrop,
// } from "@gorhom/bottom-sheet"
// import { NavigationProp } from "@react-navigation/native"
// // import { AuthenticationStackParamList } from "#navigators/index"

// // type AuthInitialScreenNavigationProps = NavigationProp<AuthenticationStackParamList, "Initial">

// // interface AuthInitialScreenProps {
// //     navigation: AuthInitialScreenNavigationProps
// // }

// const WenaCountries = [
//     {
//         title: "Most Popular",
//         id: "popular",
//         data: [
//             {
//                 list: [
//                     { name: "Angola", dial_code: "+244", code: "AO", flag: "🇦🇴", available: true },
//                     { name: "Mozambique", dial_code: "+258", code: "MZ", flag: "🇲🇿", available: true },
//                 ],
//             },
//         ],
//     },
//     {
//         title: "Availables",
//         id: "available",
//         data: [
//             {
//                 list: [
//                     { name: "Angola", dial_code: "+244", code: "AO", flag: "🇦🇴", available: true },
//                     { name: "Cape Verde", dial_code: "+238", code: "CV", flag: "🇨🇻", available: true },
//                     { name: "Mozambique", dial_code: "+258", code: "MZ", flag: "🇲🇿", available: true },
//                 ],
//             },
//         ],
//     },
//     {
//         title: "Others (Coming Soon)",
//         id: "other",
//         data: [
//             {
//                 list: [
//                     { name: "Botswana", dial_code: "+267", code: "BW", flag: "🇧🇼", available: false },
//                     { name: "Congo", dial_code: "+242", code: "CG", flag: "🇨🇬", available: false },
//                     { name: "RDC", dial_code: "+243", code: "CD", flag: "🇨🇩", available: false },
//                     { name: "Rwanda", dial_code: "+250", code: "RW", flag: "🇷🇼", available: false },
//                     { name: "Namibia", dial_code: "+264", code: "NA", flag: "🇳🇦", available: false },
//                     { name: "Gabon", dial_code: "+241", code: "GA", flag: "🇬🇦", available: false },
//                     { name: "Zambia", dial_code: "+260", code: "ZM", flag: "🇿🇲", available: false },
//                     { name: "Zimbabwe", dial_code: "+263", code: "ZW", flag: "🇿🇼", available: false },
//                 ],
//             },
//         ],
//     },
// ]

// interface ImageOvalArtistsProps {
//     color: string
//     image?: string
//     duration?: number
//     delay?: number
//     size: number
//     // style: StyleProp<ViewStyle>
//     animatedStyle?: AnimatedStyleProp<ViewStyle>
//     url?: string
// }

// export interface Country {
//     name: string
//     dial_code: string
//     code: string
//     flag: string
//     available: true
// }

// const avatarItems = [
//     {
//         size: 65,
//         color: "#5C818E",
//         delay: 90,
//         duration: 1500,
//         position: { top: 0, left: 0 },
//         url: "https://portalrapmais.com/wp-content/uploads/2022/11/Future-2.jpg",
//     },
//     {
//         size: 120,
//         color: "#FEA1AA",
//         delay: 250,
//         duration: 3000,
//         position: { top: 0, left: "10%" },
//         url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Beyonc%C3%A9_Black_Is_King_Still.png/640px-Beyonc%C3%A9_Black_Is_King_Still.png",
//     },
//     {
//         size: 90,
//         color: "#2B2CF3",
//         delay: 130,
//         duration: 2400,
//         position: { top: 0, left: "20%" },
//         url: "https://www.agendalx.pt/content/uploads/2021/10/anselmo-ralph.jpg",
//     },
//     {
//         size: 40,
//         color: "#557678",
//         delay: 200,
//         duration: 2800,
//         position: { top: 0, left: "35%" },
//         url: "https://i.guim.co.uk/img/media/772945dfa2ae40a8d956a278a6fc35c6ed5040cd/0_941_3740_2243/master/3740.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b34607df232c257766c8e25aff36b5d5",
//     },
//     {
//         size: 60,
//         color: "#5C818E",
//         delay: 100,
//         duration: 1800,
//         position: { top: 0, left: "45%" },
//         url: "https://correiokianda.info/wp-content/uploads/2022/11/nagrelha-1.jpg",
//     },
//     {
//         size: 100,
//         color: "#00C89C",
//         delay: 320,
//         duration: 2000,
//         position: { top: 0, left: "55%" },
//         url: "https://res.cloudinary.com/deopro/images/f_auto,q_auto/v1621452626/yola-semedo/yola-semedo.jpg",
//     },
//     {
//         size: 30,
//         color: "#6A97D3",
//         delay: 150,
//         duration: 2200,
//         position: { top: 0, right: "10%" },
//         url: "https://www.delas.pt/files/2019/05/P%C3%A9rola.jpg",
//     },
//     {
//         size: 100,
//         color: "#FDCE3F",
//         delay: 190,
//         duration: 1600,
//         position: { top: 0, right: "15%" },
//         url: "http://portaltudoaver.com/wp-content/uploads/2020/06/C4-Pedro-.jpg",
//     },
// ]

// const ImageOvalArtists: React.FC<ImageOvalArtistsProps> = ({
//     color,
//     duration,
//     delay,
//     size,
//     // style: $OverritedStyles,
//     url,
//     // animatedStyle,
// }) => {
//     const animation = useSharedValue(0)
//     const animationOpacity = useSharedValue(0)

//     const $animationStyle = useAnimatedStyle(() => {
//         return {
//             opacity: animationOpacity.value,
//             transform: [
//                 {
//                     translateY: animation.value,
//                 },
//             ],
//         }
//     })

//     function $ViewStyle() {
//         return [
//             $ArtistOvalBase,
//             // $OverritedStyles,
//             {
//                 backgroundColor: color,
//                 height: size,
//                 borderRadius: size * 2,
//             },
//             $animationStyle,
//         ]
//     }

//     const startArtistAnimation = () => {
//         console.log("start bouncing effect")
//         animationOpacity.value = withTiming(1, { duration: 1200 })

//         // animation.value = withTiming(delay, {
//         //     duration,
//         //     // easing: Easing.bounce,
//         //     easing: Easing.bezier(0.2, 0.1, 1, 0.55),
//         // })
//     }

//     useEffect(() => {
//         startArtistAnimation()
//     }, [])

//     return (
//         <Animated.View style={$ViewStyle()}>
//             <Image style={$ArtistOvalImage} source={{ uri: url }} />
//         </Animated.View>
//     )
// }

// const AuthenticationPhoneInitial: React.FC<AuthInitialScreenProps> = ({ navigation }) => {
//     const [phoneCountry, setPhoneCountry] = useState<Country>({
//         name: "Angola",
//         dial_code: "+244",
//         code: "AO",
//         flag: "🇦🇴",
//         available: true,
//     })

//     const [phoneNumber, setPhoneNumber] = useState<string>("")

//     // ref
//     const bottomSheetModalRef = useRef<BottomSheetModal>(null)

//     // variables
//     const snapPoints = useMemo(() => ["25%", "70%"], [])

//     // callbacks
//     const handlePresentModalPress = useCallback(() => {
//         bottomSheetModalRef.current?.present()
//     }, [])

//     const handleSheetChanges = useCallback((index: number) => {
//         console.log("handleSheetChanges", index)
//     }, [])

//     const renderSectionHeader = useCallback(
//         ({ section }: any) => (
//             <View style={$SectionHeaderWrapper}>
//                 <Text weight="bold" color="black" size="lg">
//                     {section.title}
//                 </Text>
//             </View>
//         ),
//         [],
//     )

//     const renderItem = ({ item }: any) => {
//         const selectItem = () => {
//             setPhoneCountry(item)
//             if (bottomSheetModalRef.current) bottomSheetModalRef.current.dismiss()
//         }
//         return (
//             <TouchableOpacity onPress={() => (item.available ? selectItem() : null)}>
//                 <View style={$CountryItemWrapper}>
//                     <View style={$CountryItemImageWrapper}>
//                         <Image
//                             style={$CountryImage}
//                             source={{ uri: `https://flagcdn.com/w160/${item.code.toLowerCase()}.png` }}
//                         />
//                     </View>
//                     <Text weight="medium" color="#acacac" size="sm">
//                         {item.dial_code}
//                     </Text>
//                     <Text weight="medium" color="black" size="xs">
//                         {item.name}
//                     </Text>
//                 </View>
//             </TouchableOpacity>
//         )
//     }

//     const renderSections = useCallback(({ section, item }: any) => {
//         function $SectionStyle() {
//             return { opacity: section.id === "other" ? 0.3 : 1, marginTop: 15, marginBottom: 15 }
//         }
//         return (
//             <BottomSheetFlatList
//                 style={$SectionStyle()}
//                 data={item.list}
//                 // keyExtractor={(item) => item.dial_code}
//                 numColumns={4}
//                 renderItem={renderItem}
//             />
//         )
//     }, [])

//     const renderBackdrop = useCallback(
//         (props: any) => (
//             <BottomSheetBackdrop
//                 {...props}
//                 opacity={0.8}
//                 // disappearsOnIndex={1}
//                 disappearsOnIndex={-1}
//             />
//         ),
//         [],
//     )

//     function verifyPhone() {
//         if (phoneNumber.length < 8 || phoneNumber.length > 10) {
//             Alert.alert("Phone Number", "not a valid phone number")
//         } else {
//             navigation.navigate("Verification", { phoneNumber, country: phoneCountry })
//         }
//     }

//     return (
//         <Screen
//             preset="fixed"
//             statusBarStyle="light"
//             contentContainerStyle={$screenContentContainer}
//         // safeAreaEdges={["top", "bottom"]}
//         >
//             <View style={$artistsViewWrapper}>
//                 {avatarItems.map((item, index) => (
//                     <ImageOvalArtists
//                         delay={item.delay}
//                         key={index + 1}
//                         // style={item.position}
//                         color={item.color}
//                         size={item.size}
//                         duration={item.duration}
//                         url={item.url}
//                     />
//                 ))}
//             </View>

//             <View style={$LogoViewWrapper}>
//                 <Image
//                     resizeMode="contain"
//                     style={$LogoImage}
//                     source={require("#assets/logo-wena-white.png")}
//                 />
//             </View>

//             <Button
//                 preset="login"
//                 // textStyle={ color: "black" }
//                 style={$CountryBtn}
//                 LeftAccessory={(props: any) => (
//                     // <Text style={$iconStyle}>🇦🇴</Text>
//                     <AutoImage
//                         style={[props.style, $FlagImageItem]}
//                         maxHeight={40}
//                         maxWidth={40}
//                         source={{ uri: `https://flagcdn.com/w160/${phoneCountry.code.toLowerCase()}.png` }}
//                     />
//                     // <Icon containerStyle={props.style} style={$iconStyle} icon="ladybug" />
//                 )}
//                 onPress={handlePresentModalPress}
//             >
//                 {phoneCountry.name} {`(${phoneCountry.dial_code})`}
//             </Button>
//             <TextField
//                 value={phoneNumber}
//                 onChangeText={setPhoneNumber}
//                 containerStyle={$textField}
//                 inputWrapperStyle={$inputStyle}
//                 style={$TextFieldTextStyle}
//                 textAlign="center"
//                 // autoCapitalize="none"
//                 autoComplete="tel"
//                 // autoCorrect={false}
//                 keyboardType="phone-pad"
//                 // label="1234569"
//                 // placeholder="923123456"
//                 // labelTx="loginScreen.emailFieldLabel"
//                 placeholderTx="authScreen.number"
//             // helper={errors?.authEmail}
//             // status={errors?.authEmail ? "error" : undefined}
//             // onSubmitEditing={() => authPasswordInput.current?.focus()}
//             />
//             <Button
//                 testID="login-button"
//                 text="🔥"
//                 style={$tapButton}
//                 preset="reversed"
//                 onPress={() => verifyPhone()}
//             />

//             <Text
//                 style={$TermsText}
//                 weight="medium"
//                 size="xs"
//                 color="rgba(255,255,255,.3)"
//                 tx="authScreen.terms"
//             />
//             <BottomSheetModal
//                 ref={bottomSheetModalRef}
//                 index={1}
//                 snapPoints={snapPoints}
//                 backdropComponent={renderBackdrop}
//                 onChange={handleSheetChanges}
//             >
//                 <BottomSheetSectionList
//                     sections={WenaCountries}
//                     renderItem={renderSections}
//                     renderSectionHeader={renderSectionHeader}
//                 />
//             </BottomSheetModal>
//         </Screen>
//     )
// }

// const $TextFieldTextStyle = { color: "black" }

// const $LogoImage: ImageStyle = { height: "100%", width: "100%" }

// const $CountryBtn: ViewStyle = {
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//     borderRadius: 12,
// }

// const $FlagImageItem: ImageStyle = { borderRadius: 4 }

// const $TermsText: TextStyle = { textAlign: "center", marginTop: 15 }

// const $LogoViewWrapper: ViewStyle = { height: 150, aspectRatio: 1, alignSelf: "center" }

// const $CountryImage: ImageStyle = { borderRadius: 50 * 2, width: 50, height: 50 }

// const $CountryItemImageWrapper: ViewStyle = {
//     shadowColor: "#000",
//     shadowOffset: { width: -1, height: 6 },
//     shadowOpacity: 0.4,
//     shadowRadius: 6,
// }

// const $CountryItemWrapper: ViewStyle = {
//     flexDirection: "column",
//     marginBottom: 5,
//     alignItems: "center",
//     justifyContent: "center",
//     width: WIDTH / 4,
// }

// const $SectionHeaderWrapper: ViewStyle = {
//     backgroundColor: "white",
//     width: "100%",
//     paddingVertical: 10,
//     paddingHorizontal: 10,
// }

// const $ArtistOvalImage: ImageStyle = { width: "100%", height: "100%" }

// const $ArtistOvalBase: ViewStyle = {
//     aspectRatio: 1,
//     position: "absolute",
//     overflow: "hidden",
//     shadowColor: "#FFF",
//     shadowOffset: { width: -1, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
// }

// const $screenContentContainer: ViewStyle = {
//     paddingVertical: spacing.huge,
//     paddingHorizontal: spacing.large,
//     backgroundColor: "#000",
//     flex: 1,
//     // alignItems: 'center',
//     justifyContent: "flex-end",
// }

// const $artistsViewWrapper: ViewStyle = {
//     position: "absolute",
//     width: WIDTH,
//     height: HEIGHT,
//     // backgroundColor:'red',
//     // zIndex:9999,
// }

// const $tapButton: ViewStyle = {
//     backgroundColor: "#FF0A3F", // colors.palette.primary500,
//     // marginTop: spacing.extraSmall,
//     borderRadius: 100,
// }

// const $textField: ViewStyle = {
//     marginBottom: spacing.medium,
//     // backgroundColor:'white'
// }

// const $inputStyle: ViewStyle = {
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 0,
//     borderRadius: 12,

//     // backgroundColor:'white'
// }

// export default AuthenticationPhoneInitial
