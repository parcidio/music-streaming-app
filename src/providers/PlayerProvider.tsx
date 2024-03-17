import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { PlayerContextType, Track } from "@/assets/types";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlayerContext = createContext<PlayerContextType>({
    // track is option based on the type declaration
    setCurrentTrack: () => { },
});

export default function PlayerProvider({ children }: PropsWithChildren) {
    const [currentTrack, setCurrentTrack] = useState<Track>({
        id: '3x2YIvkLcxvZQsA5x6xyIR',
        name: 'Boom Clap',
        preview_url:
            'https://p.scdn.co/mp3-preview/9ace654d50ca2e58e36cf23ec42c432196def289?cid=d3aa794943da4d63b6bf61a03812256e',

        artists: [
            {
                id: '25uiPmTg16RbhZWAqwLBy5',
                name: 'Charli XCX',
            },
        ],
        album: {
            id: '0DgLboDoKVcueitwtpQxe2',
            name: 'SUCKER',
            images: [
                {
                    url: 'https://i.scdn.co/image/ab67616d0000b273a27aba008251c202b76a9a7e',
                    height: 640,
                    width: 640,
                },
                {
                    url: 'https://i.scdn.co/image/ab67616d00001e02a27aba008251c202b76a9a7e',
                    height: 300,
                    width: 300,
                },
                {
                    url: 'https://i.scdn.co/image/ab67616d00004851a27aba008251c202b76a9a7e',
                    height: 64,
                    width: 64,
                },
            ],
        },
    },);

    console.log("Track: ", currentTrack);
    return (
        < PlayerContext.Provider value={{ currentTrack, setCurrentTrack }}>
            {children}
        </PlayerContext.Provider>
    )
}
// Helper functinos/hook
export const usePlayerContext = () => useContext(PlayerContext);