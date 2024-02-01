import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TrackListItem from '@/src/components/TrackListItem';
import { tracks } from '@/assets/data/tracks';
import MenuItem from '@/src/components/menuItem';
import { menus } from '@/assets/data/menus';
import { Link } from 'expo-router';
import Animated from "react-native-reanimated"

export default function MenusScreen() {

    return (

        <Animated.ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "transparent" }}>
            {menus.map((item, index) => (
                <MenuItem link={item.link} text={item.text} color={item.color} key={index} />
            ))}
        </Animated.ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
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
        color: 'blue',
        marginLeft: 10,
    },
});
