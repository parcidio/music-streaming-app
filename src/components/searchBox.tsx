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
import { useNavigation } from "@react-navigation/native";


export function SearchBox({ search, setSearch, showProfile = false, showSearchBox = true, showBackButton = false }: any) {
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            {showBackButton && (<Pressable onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-sharp" color="black" />
            </Pressable>)}
            <View style={styles.header}>
                {showSearchBox && (
                    <>
                        <Icon name="search" color="gray" /><TextInput
                            value={search}
                            placeholder="What do you want to listen to?"
                            placeholderTextColor="gray"
                            onChangeText={setSearch}
                            style={styles.input} />
                    </>
                )}

                {search.length > 0 && (
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
