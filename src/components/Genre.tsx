import { StyleSheet, Text, View, Image, BackHandler } from "react-native";
import React from "react";
import { Genre } from "@/assets/types";
import { darkColors, lightColors } from "@/src/theme";
import { useTheme } from "../providers/CustomThemeContext";


const GenreCard = ({ title }: Genre) => {
  const { isDarkMode } = useTheme();


  return (
    <View style={styles.container}>

      <View style={{ ...styles.card, backgroundColor: isDarkMode ? darkColors.card : lightColors.card }}>
        <Text
          style={{ ...styles.title, color: isDarkMode ? darkColors.text : lightColors.text }} numberOfLines={1} ellipsizeMode="tail"
        >
          {title.toUpperCase()}
        </Text>
      </View>
    </View>

  );
};

export default GenreCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically (if needed)

  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    margin: 5,
    height: 40,
    borderRadius: 10,
    elevation: 1,
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 30,
    fontSize: 14,
    width: "100%",
    flexWrap: 'wrap',
  }
});