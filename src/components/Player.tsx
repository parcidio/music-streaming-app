import { View, Text, StyleSheet, Image, Pressable, ScrollView, FlatList } from 'react-native';
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { usePlayerContext } from '../providers/PlayerProvider';
import React, { useEffect, useState } from 'react';
import { AVPlaybackStatus, Audio } from 'expo-av'
import { Sound } from 'expo-av/build/Audio';
import { BottomModal, Modal, ModalButton, ModalContent, ModalFooter, SlideAnimation } from 'react-native-modals';
import Header from './Header';
import { tracks } from '@/assets/data/tracks';
import RecentlyPlayedCard from "./AlbumCard";
import TrackListItem from './TrackListItem';
import ArtistCard from './ArtistCard';


const Player = () => {
  const { currentTrack } = usePlayerContext();

  if (!currentTrack) {
    return null;
  }

  const image = currentTrack.album.images?.[0];

  const [sound, setSound] = useState<Sound>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    playTrack();

  }, [currentTrack]);

  const playTrack = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    if (!currentTrack?.preview_url) {
      return;
    }

    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: currentTrack.preview_url,
    });
    setSound(newSound);
    newSound.setOnPlaybackStatusUpdate(onPlayBackStatusUpdate)
    await newSound.playAsync();
  };

  const onPlayBackStatusUpdate = (status: AVPlaybackStatus) => {
    // this function is useful to interuct with the song being play, including allowing us to get the 'durationMillis' for the song progress bar
    console.log('status: ', status)
    if (!status.isLoaded) {
      return
    }

    setIsPlaying(status.isPlaying);
  }
  const onPause = async () => {
    if (!sound) {
      return
    }

    if (isPlaying) {
      sound.pauseAsync();
    } else {
      sound.playAsync()
    }
    setIsPlaying(!isPlaying);

  }

  const [playerFullScreen, setPlayerFullScreen] = useState(true)

  return (

    <Pressable
      onPress={() => {
        setPlayerFullScreen(true)
        console.log("fullscreen")
      }}
    >
      <View style={styles.container}>
        <View style={styles.player}>
          {image && <Image source={{ uri: image.url }} style={styles.image} />}

          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{currentTrack.name}</Text>
            <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">{currentTrack.artists[0]?.name}</Text>
            <View style={styles.progressBar} />
          </View>

          <Ionicons
            name={'heart-outline'}
            size={20}
            color={'white'}
            style={{ marginHorizontal: 10 }}
          />
          <Ionicons
            onPress={onPause}
            disabled={!currentTrack?.preview_url}
            name={isPlaying ? 'pause' : 'play'}
            size={22}
            color={currentTrack?.preview_url ? 'white' : 'gray'}
          />
        </View>
      </View>
      {/* <Modal
        visible={playerFullScreen}
        onTouchOutside={() => {
          setPlayerFullScreen(false)
        }}
        modalAnimation={new SlideAnimation({
          slideFrom: 'bottom',
        })}
        footer={
          <ModalFooter>
            <ModalButton
              text="CANCEL"
              onPress={() => { }}
            />
            <ModalButton
              text="OK"
              onPress={() => { }}
            />
          </ModalFooter>
        }
      >
        <ModalContent>
          {image && <Image source={{ uri: image.url }} style={styles.image} />}
        </ModalContent>
      </Modal> */}

      <BottomModal
        visible={playerFullScreen}
        onDismiss={() => setPlayerFullScreen(false)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
      >
        <ModalContent
          style={{ height: "100%", width: "100%", backgroundColor: "black" }}
        >
          <ScrollView showsVerticalScrollIndicator={true}>

            <View style={{ height: "100%", width: "100%", marginTop: 40 }}>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <AntDesign
                  onPress={() => setPlayerFullScreen(!playerFullScreen)}
                  name="down"
                  size={24}
                  color="white"
                />

                {/* <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "white" }}
                >
                  {currentTrack?.name}
                </Text> */}

                <Entypo name="dots-three-vertical" size={24} color="white" />
              </Pressable>

              <View style={{ height: 30 }} />

              <View style={{ padding: 10 }}>
                <Image
                  style={{ width: "100%", height: 330, borderRadius: 10 }}
                  source={{ uri: image.url }}
                />
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text

                      style={{
                        color: "white", fontWeight: '500',

                        fontSize: 16,
                      }}
                    >
                      {currentTrack?.name}
                    </Text>
                    <Text style={{ color: "#D3D3D3", marginTop: 4 }}>
                      {currentTrack?.artists[0].name}
                    </Text>
                  </View>

                  <AntDesign name="heart" size={24} color="red" />
                </View>

                <View style={{ marginTop: 10 }}>
                  <View
                    style={{
                      width: "100%",
                      marginTop: 10,
                      height: 3,
                      backgroundColor: "gray",
                      borderRadius: 5,
                    }}
                  >
                    <View
                      style={[
                        // styles.progressbar,
                        // { width: `${progress * 100}%` },
                      ]}
                    />
                    <View
                      style={[
                        // {
                        //   position: "absolute",
                        //   top: -5,
                        //   width: circleSize,
                        //   height: circleSize,
                        //   borderRadius: circleSize / 2,
                        //   backgroundColor: "white",
                        // },
                        // {
                        //   left: `${progress * 100}%`,
                        //   marginLeft: -circleSize / 2,
                        // },
                      ]}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 12,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{ color: "white", fontSize: 15 }}
                    >
                      {/* {formatTime(currentTime)} */}
                    </Text>

                    <Text
                      style={{ color: "white", fontSize: 15 }}
                    >
                      {/* {formatTime(totalDuration)} */}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 17,
                  }}
                >

                  <Pressable>
                    <Ionicons name="play-skip-back" size={30} color="white" />
                  </Pressable>
                  <Pressable >
                    {isPlaying ? (
                      <AntDesign name="pausecircle" size={60} color="white" />
                    ) : (
                      <Pressable
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 30,
                          backgroundColor: "red",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Entypo name="controller-play" size={26} color="black" />
                      </Pressable>
                    )}
                  </Pressable>
                  <Pressable >
                    <Ionicons name="play-skip-forward" size={30} color="white" />
                  </Pressable>

                </View>
                <Header heading={"Albums populares"} link={"/albums"} linkText={"Mais"} />
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {tracks.map((item, index) => (
                    <ArtistCard track={item} key={index} />
                  ))}
                </ScrollView>
              </View>
            </View>

          </ScrollView>
        </ModalContent>
      </BottomModal>
    </Pressable>


  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -75,
    width: '100%',
    height: 75,
    padding: 10,
  },
  player: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 3,
    paddingRight: 15,
  },
  title: {
    color: 'white',
  },
  subtitle: {
    color: 'lightgray',
    fontSize: 12,
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 5,
  },
  progressBar: {
    backgroundColor: 'white',
    height: 2,
  }
});

export default Player;