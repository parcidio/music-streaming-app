import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TrackListItemProps } from "@/assets/types";
import { useTheme } from "../providers/CustomThemeContext";
import { darkColors, lightColors } from "../theme";

const ArtistCard = ({ track }: TrackListItemProps) => {
  const { isDarkMode } = useTheme();

  const image = track.album?.images?.[0];

  return (
    <View style={{ margin: 10 }}>
      <Image

        style={{ width: 130, height: 130, borderRadius: 100 }}
        source={{ uri: image.url }}
      />
      <Text
        style={{ ...styles.title, color: isDarkMode ? darkColors.text : lightColors.text }}

        numberOfLines={1} ellipsizeMode="tail"

      >
        {track?.name}
      </Text>
    </View>
  );
};

export default ArtistCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    width: 100, // Set the desired width
    flexWrap: 'wrap',
  }
});