import { PropsWithChildren, createContext, useContext, useState } from "react";
import { PlayerContextType, Track } from "@/assets/types";

const PlayerContext = createContext<PlayerContextType>({
    // track is option based on the type declaration
    setCurrentTrack: ()=>{},
});

export default function PlayerProvider({children} : PropsWithChildren){
    const [currentTrack, setCurrentTrack] = useState<Track>();

    console.log("Track: ", currentTrack);
    return(
       < PlayerContext.Provider value={{currentTrack, setCurrentTrack}}>
       {children}
       </PlayerContext.Provider>
    )
}
// Helper functinos/hook
export const usePlayerContext = () => useContext(PlayerContext);