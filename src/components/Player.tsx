import { View, Text, StyleSheet, Image, Pressable, ScrollView, FlatList } from 'react-native';
import { usePlayerContext } from '../providers/PlayerProvider';
import React, { useEffect, useState } from 'react';
import FullPlayer from './fullPlayer'
import MiniPlayer from './miniPlayer';


const Player = () => {
  const { currentTrack, playerFullScreen, setPlayerFullScreen, playPrevTrack, playNextTrack, onPause, isPlaying, setIsPlaying } = usePlayerContext();
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const image = currentTrack?.album?.images?.[0];

  return (
    <>
      {currentTrack && (
        <MiniPlayer />
      )}

      {playerFullScreen && (
        <FullPlayer />
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