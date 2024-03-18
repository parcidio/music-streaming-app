import { PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { PlayerContextType, Track } from "@/assets/types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AVPlaybackStatus, AVPlaybackStatusSuccess, Audio } from 'expo-av'
import { Sound } from 'expo-av/build/Audio';
import { tracks } from '@/assets/data/tracks';
import { isLoaded } from "expo-font";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const PlayerContext = createContext<PlayerContextType>({
    // track is option based on the type declaration
    setCurrentTrack: () => { },
    setCurrentTrackIndex: () => Number,
    setPlayerFullScreen: () => Boolean,
    playPrevTrack: () => { },
    playNextTrack: () => { },
    onPause: () => { },
    setIsPlaying: () => Boolean,

});

export default function PlayerProvider({ children }: PropsWithChildren) {
    const [currentTrack, setCurrentTrack] = useState<Track>();

    // Get the current playback status



    console.log("Track: ", currentTrack);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    const [sound, setSound] = useState<Sound>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [soundStatus, setSoundStatus] = useState<AVPlaybackStatusSuccess>()
    useEffect(() => {
        playTrack();

    }, [currentTrack]);

    const playTrack = async () => {
        if (sound) {
            await sound?.unloadAsync();
        }
        const status = await sound?.getStatusAsync();
        console.log("Playing: ", status)
        if (!currentTrack?.preview_url) {
            return;
        }

        const { sound: newSound } = await Audio.Sound.createAsync({
            uri: currentTrack?.preview_url,
        });

        newSound.setOnPlaybackStatusUpdate(onPlayBackStatusUpdate);
        setSound(newSound);

        if (!(await newSound.getStatusAsync()).isLoaded) {
            await newSound.loadAsync({ uri: currentTrack?.preview_url });
        }


        await newSound.playAsync();
    };

    const onPlayBackStatusUpdate = (status: AVPlaybackStatus) => {
        // this function is useful to interuct with the song being play, including allowing us to get the 'durationMillis' for the song progress bar
        // console.log('status: ', status)
        if (!status?.isLoaded) {
            return
        }
        console.log("PlayBack: ", status?.positionMillis || 0)
        console.log("PlayBack: ", status?.durationMillis || 0)
        setSoundStatus(status);
        setIsPlaying(status?.isPlaying);
    }
    const onPause = async () => {
        if (!sound) {
            return
        }



        if (isPlaying) {

            await sound?.pauseAsync();
        } else {

            await sound?.playAsync()
        }


        setIsPlaying(false);

    }

    const playNextTrack = () => {
        const nextIndex = (currentTrackIndex + 1) % tracks?.length;
        setCurrentTrackIndex(nextIndex);
    };

    const playPrevTrack = () => {
        const prevIndex =
            (currentTrackIndex - 1 + tracks?.length) % tracks?.length;
        setCurrentTrackIndex(prevIndex);
    };


    const [playerFullScreen, setPlayerFullScreen] = useState(false)

    return (
        < PlayerContext.Provider value={{ currentTrack, setCurrentTrack, playerFullScreen, setPlayerFullScreen, playPrevTrack, playNextTrack, onPause, isPlaying, setIsPlaying, setCurrentTrackIndex, soundStatus }}>
            {children}
        </PlayerContext.Provider>
    )
}
// Helper functinos/hook
export const usePlayerContext = () => useContext(PlayerContext);