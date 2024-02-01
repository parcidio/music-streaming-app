import { StyleSheet, Text, View, Image, Pressable, Platform } from "react-native";
import React from "react";
import { Menu } from "@/assets/types";
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import Animated from "react-native-reanimated"
const MenuItem = ({ link, text, color }: Menu) => {
    return (

        <Animated.View><Link href={link} asChild>
            <Pressable>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', color]}
                    style={{ ...styles.container, backgroundColor: color }}
                    start={{ x: 0, y: 4 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text
                        style={styles.title}
                    >
                        {text.toUpperCase()}
                    </Text>
                </LinearGradient>
            </Pressable>
        </Link>
        </Animated.View>
    );
};

export default MenuItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        elevation: 2,
    },

    title: {
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        fontSize: 13,
        fontWeight: "900",
        color: "white",
        margin: 40,
        flexWrap: 'wrap',
    }
});