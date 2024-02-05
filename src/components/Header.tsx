import { StyleSheet, Text, View, Image, GestureResponderEvent, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { HeaderProps } from "@/assets/types";



const Header = ({ link, linkText, heading }: HeaderProps) => {


    return (
        <Link href={link} asChild>
            <Pressable>
                <View style={styles.head}>
                    <Text
                        style={styles.heading}
                    >
                        {heading}
                    </Text>
                    <Text
                        // onPress={props.link}
                        style={styles.link}
                    >
                        {linkText}

                    </Text>
                </View></Pressable></Link>

    );
};

export default Header;

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    heading: {
        color: "black",
        fontSize: 19,
        fontWeight: "bold",
        marginHorizontal: 10,
        marginTop: 10,
    },
    link: {
        color: "red",
        fontSize: 14,
        fontWeight: "100",
        marginHorizontal: 10,
        marginTop: 10,
    },
    head: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});