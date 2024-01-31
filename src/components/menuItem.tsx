import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Menu } from "@/assets/types";
import { Link } from "expo-router";

const MenuItem = ({ link, text, color }: Menu) => {
    return (
        <Link href={link} asChild>
            <Pressable>
                <View style={{ ...styles.container, backgroundColor: color }}>
                    <Text
                        style={styles.title}
                    >
                        {text.toUpperCase()}
                    </Text>
                </View>
            </Pressable>
        </Link>
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