import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TrackListItemProps } from "@/assets/types";


const ArtistCard = ({track} : TrackListItemProps) => {
    const image = track.album?.images?.[0];

  return (
    <View style={{ margin: 10 }}>
      <Image

        style={styles.card}
        source={{ uri: image.url }}
      />
      <Text
        style={styles.title}
        
        numberOfLines={1} ellipsizeMode="tail"
        
      >
        {track?.name}
      </Text>
    </View>
  );
};

export default ArtistCard;

const styles = StyleSheet.create({
  card:{ width: 130, height: 130, borderRadius: 10 },
    title:{
        fontSize: 13,
        fontWeight: "500",
        color: "black",
        marginTop: 10,
        width: 100, // Set the desired width
        flexWrap: 'wrap',
      }
});