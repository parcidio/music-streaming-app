import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ArtistCard from "../../components/ArtistCard";
import RecentlyPlayedCard from "../../components/AlbumCard";
import { useNavigation } from "@react-navigation/native";
import { TrackListItemProps } from "@/assets/types";
import { tracks } from '@/assets/data/tracks';
import { bannerData } from '@/assets/data/banner';
import TrackListItem from "@/src/components/TrackListItem";
import GenreCard from "@/src/components/Genre";
import { Link } from "expo-router";
import Colors from "@/src/constants/Colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeBanner } from "@/src/components/banner";
import { SearchBox } from "@/src/components/searchBox";
import Header from "@/src/components/Header";


const HomeScreen = () => {

  const [search, setSearch] = useState('');
  const genre = [
    { title: 'Kizomba' },
    { title: 'Semba' },
    { title: 'Pop' },
    { title: 'Jazz' },
    { title: 'Rap' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}> */}
      <SearchBox search={search} setSearch={setSearch} showProfile={true} />
      {/* </View> */}

      <ScrollView>
        {/* Trending */}
        <Header heading={"Trending"} link={"/hits"} linkText={"Mais"} />

        <HomeBanner items={bannerData} pagination={true} autoPlay={false} />
        {/* Generos */}
        <Header heading={"Generos"} link={"/menus"} linkText={"Mais"} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {genre.map((item) => (
            <GenreCard title={item.title} />
          ))}
        </ScrollView>
        {/* Os Top Artistas */}
        <Header heading={"Os Top Artistas"} link={"/artists"} linkText={"Mais"} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tracks.map((item, index) => (
            <ArtistCard track={item} key={index} />
          ))}
        </ScrollView>
        {/*  Albums populares */}
        <Header heading={"Albums populares"} link={"/albums"} linkText={"Mais"} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tracks.map((item, index) => (
            <RecentlyPlayedCard track={item} key={index} />
          ))}
        </ScrollView>
        {/* Novos lançamentos */}
        <Header heading={"Novos lançamentos"} link={"/newReleases"} linkText={"Mais"} />

        <FlatList
          data={tracks}
          renderItem={({ item }) => <TrackListItem track={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',


  },
  searchBar: {
    flex: 1,
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
    fontWeight: "normal",
    marginHorizontal: 10,
    marginTop: 10,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
