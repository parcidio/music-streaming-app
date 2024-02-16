import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import { tracks } from '@/assets/data/tracks';
import { Link } from "expo-router";
import { Icon } from "./Icon";
import { DarkTheme, DefaultTheme, useNavigation } from "@react-navigation/native";
import { useColorScheme } from "./useColorScheme.web";
import { useTheme } from "../providers/CustomThemeContext";


export function SearchBox({ search, setSearch, title = "", showProfile = false, showSearchBox = true, showBackButton = false }: any) {

    const navigation = useNavigation();
    const { isDarkMode } = useTheme();



    return (
        <View style={styles.headerContainer}>
            {showBackButton && (<Pressable onPress={() => navigation.goBack()}>
                <View style={{
                    paddingVertical: 12,
                }}>

                    <Icon name="arrow-back-sharp" color={isDarkMode ? 'white' : 'black'} />
                </View>
            </Pressable>)}
            {!showSearchBox && title.length > 0 && (
                <Text style={{ ...styles.title, color: isDarkMode ? 'white' : 'black' }}>
                    {title}
                </Text>
            )}
            <View style={styles.header}>
                {showSearchBox && (
                    <>
                        <Icon name="search" color={isDarkMode ? 'black' : 'white'} /><TextInput
                            value={search}
                            placeholder="Search..."
                            placeholderTextColor="gray"
                            onChangeText={setSearch}
                            style={styles.input} />
                    </>
                )}



                {search?.length > 0 && (
                    <Text onPress={() => setSearch('')} style={styles.cancelText}>
                        Cancel
                    </Text>
                )}
            </View>
            {showProfile && (<Link href="/profile" asChild>
                <Pressable>
                    {({ pressed }) => (
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                resizeMode: "cover",

                            }}
                            source={{ uri: tracks[0].album?.images?.[0].url }}
                        />
                    )}
                </Pressable>
            </Link>)}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,
    },
    title: {
        flex: 1,
        paddingHorizontal: 16,
        fontSize: 18,
        fontWeight: "bold",
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
    },

    input: {
        flex: 1,
        marginHorizontal: 10,
        fontSize: 16,
        paddingVertical: 8,
        color: 'black',
    },
    cancelText: {
        color: 'red',
        marginLeft: 10,
    },

});
