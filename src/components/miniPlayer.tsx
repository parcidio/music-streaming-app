import { View, Text, StyleSheet, Image, Pressable, ScrollView, FlatList } from 'react-native';
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { usePlayerContext } from '../providers/PlayerProvider';
import React, { useEffect, useState } from 'react';



const MiniPlayer = () => {
    const { currentTrack, playerFullScreen, setPlayerFullScreen, playPrevTrack, playNextTrack, onPause, isPlaying, setIsPlaying } = usePlayerContext();
    const image = currentTrack?.album?.images?.[0];
    return (
        <View style={styles.container}>
            <View style={styles.player}>
                <Pressable
                    onPress={() => {
                        setPlayerFullScreen(true)
                        console.log("fullscreen")
                    }}
                >
                    {image && <Image source={{ uri: image?.url }} style={styles?.image} />}
                </Pressable>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{currentTrack?.name}</Text>
                    <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">{currentTrack?.artists[0]?.name}</Text>
                    <View style={styles.progressBar} />
                </View>

                <Ionicons
                    name={'heart-outline'}
                    size={20}
                    color={'white'}
                    style={{ marginHorizontal: 10 }}
                />
                <Pressable
                    style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1, // Adjust the opacity when pressed

                    })}
                    // onPress={() => console.log("playe/pause")}
                    onPress={onPause}
                >
                    <Ionicons
                        disabled={!currentTrack?.preview_url}
                        name={isPlaying ? 'pause' : 'play'}
                        size={22}
                        color={currentTrack?.preview_url ? 'white' : 'gray'}
                    />
                </Pressable>
            </View>
        </View>
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

export default MiniPlayer;