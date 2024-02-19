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
import FullPlayer from './fullPlayer'


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
      await sound.pauseAsync();
    } else {
      await sound.playAsync()
    }
    setIsPlaying(!isPlaying);

  }

  const [playerFullScreen, setPlayerFullScreen] = useState(false)

  return (
    <>

      <View style={styles.container}>

        <View style={styles.player}>
          <Pressable
            onPress={() => {
              setPlayerFullScreen(true)
              console.log("fullscreen")
            }}
          >
            {image && <Image source={{ uri: image.url }} style={styles.image} />}
          </Pressable>
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



      {playerFullScreen && (
        <FullPlayer onPause={onPause} playerFullScreen={playerFullScreen} setPlayerFullScreen={setPlayerFullScreen} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentTrack={currentTrack} />
      )}
    </>
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