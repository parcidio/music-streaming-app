import { StyleSheet, Text, View, Image, GestureResponderEvent, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { HeaderProps } from "@/assets/types";
import { useTheme } from "../providers/CustomThemeContext";
import { darkColors, lightColors } from "@/src/theme";



const Header = ({ link = "/", linkText = "", heading, showLink = true }: HeaderProps) => {

    const { isDarkMode, toggleTheme } = useTheme();

    return (

        <View style={styles.head}>
            <Text
                style={{ ...styles.heading, color: isDarkMode ? darkColors.text : lightColors.text }}
            >
                {heading}
            </Text>
            {showLink && <Link href={link} asChild>
                <Pressable>
                    <Text
                        // onPress={props.link}
                        style={{ ...styles.link, color: isDarkMode ? darkColors.activeText : lightColors.activeText }}
                    >
                        {linkText}

                    </Text>
                </Pressable>
            </Link>}
        </View>

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
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 10,
        marginTop: 10,
    },
    link: {
        color: "red",
        fontSize: 12,
        marginHorizontal: 10,
        marginTop: "auto",
    },
    head: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
});