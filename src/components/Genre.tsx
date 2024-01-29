import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Genre } from "@/assets/types";


const GenreCard = ({ title }: Genre) => {


  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text
          style={styles.title} numberOfLines={1} ellipsizeMode="tail"
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
    alignItems: 'center',     // Center content horizontally (if needed)
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 1,
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    padding: 2,
    fontSize: 13,
    fontWeight: "900",
    color: "black",
    marginTop: 10,
    width: 100,
    flexWrap: 'wrap',
  }
});