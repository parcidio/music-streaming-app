import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Menu } from "@/assets/types";



const MenuItem = ({ text, color }: Menu) => {


    return (
        <View style={{ ...styles.container, backgroundColor: color }}>

            <Text
                style={styles.title}
            >
                {text.toUpperCase()}
            </Text>
        </View>

    );
};

export default MenuItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center content vertically (if needed)
        alignItems: 'center',
        marginHorizontal: 20,    // Center content horizontally (if needed)
    },

    title: {
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        fontSize: 13,
        fontWeight: "900",
        color: "white",
        padding: 20,
        width: 100,
        flexWrap: 'wrap',
    }
});