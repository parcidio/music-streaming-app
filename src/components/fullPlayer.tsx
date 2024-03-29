import { View, Text, StyleSheet, Image, Pressable, ScrollView, FlatList, TouchableOpacity } from 'react-native';
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
import { Track } from '@/assets/types';
import { State } from 'expo-router/build/fork/getPathFromState';
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';
import { Feather as Icon } from "@expo/vector-icons";
import { darkColors, palette } from '../theme';


const FullPlayer = () => {
    const { currentTrack, playerFullScreen, setPlayerFullScreen, playPrevTrack, playNextTrack, onPause, isPlaying, setIsPlaying, soundStatus } = usePlayerContext();
    const image = currentTrack?.album?.images?.[0];
    let progress = (soundStatus!.positionMillis / soundStatus!.positionMillis) * 100
    return (
        <>


            <BottomModal
                visible={playerFullScreen}
                onDismiss={() => setPlayerFullScreen(false)}
                swipeDirection={["down"]}
                onSwiping={() => setPlayerFullScreen(false)}
                swipeThreshold={200}

            >

                <ModalContent
                    style={{ height: "100%", width: "100%", backgroundColor: "black" }}
                >


                    {/* <ScrollView showsVerticalScrollIndicator={true}> */}
                    <View style={{ height: "100%", width: "100%", marginTop: 40 }}>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Pressable
                                onPress={onPause}
                                style={({ pressed }) => ({

                                    opacity: pressed ? 0.5 : 1, // Adjust the opacity when pressed
                                })}
                            >

                                <AntDesign

                                    name="menu-unfold"
                                    size={24}
                                    color="white"
                                />
                            </Pressable>

                            <View
                                style={{
                                    backgroundColor: palette.primary,
                                    width: 50, height: 4,
                                    borderRadius: 50,
                                    marginVertical: 20
                                }}
                            />
                            <Entypo name="dots-three-vertical" size={24} color="white" />

                        </View>



                        <View style={{ height: 30 }} />

                        <View style={{ padding: 10 }}>
                            <Image

                                style={{ width: "100%", height: 330, borderRadius: 10 }}
                                source={{ uri: image?.url }}
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
                                        {currentTrack?.artists[0]?.name}
                                    </Text>
                                </View>

                                <AntDesign name="heart" size={24} color="red" />
                            </View>

                            <View style={{ marginTop: 10 }}>

                                <View style={{ marginTop: 10 }}>
                                    <View
                                        style={{
                                            width: '100%',
                                            height: 3,
                                            backgroundColor: 'gray',
                                            borderRadius: 5,
                                            overflow: 'hidden', // To clip the child view (progress bar)
                                        }}>
                                        <View
                                            // progress bar to track the progress of the sound
                                            style={{
                                                width: `${progress}%`,
                                                height: '100%',
                                                backgroundColor: 'white',
                                            }}
                                        />
                                    </View>
                                </View>


                            </View>

                            <View style={{
                                marginTop: 12,
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                paddingBottom: 80
                            }}>
                                <Icon name="shuffle" color="rgba(255, 255, 255, 0.5)" size={24} />
                                <AntDesign name="stepbackward" color="white" size={32} />


                                <Pressable
                                    style={({ pressed }) => ({
                                        opacity: pressed ? 0.5 : 1, // Adjust the opacity when pressed
                                        width: 60,
                                        height: 60,
                                        borderRadius: 40,
                                        backgroundColor: "red",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    })}
                                    onPressIn={onPause}
                                >
                                    <Ionicons

                                        disabled={!currentTrack?.preview_url}
                                        name={isPlaying ? 'pause' : 'play'}
                                        size={22}
                                        color={currentTrack?.preview_url ? 'black' : 'gray'}
                                    />
                                </Pressable>
                                <AntDesign name="stepforward" color="white" size={32} />
                                <Icon name="repeat" color="rgba(255, 255, 255, 0.5)" size={24} />
                            </View>
                        </View>
                    </View>

                    {/* </ScrollView> */}
                </ModalContent>
            </BottomModal >
        </>
    )
}
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


export default FullPlayer;