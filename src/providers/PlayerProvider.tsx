import { PropsWithChildren, createContext, useContext, useState } from "react";
import { PlayerContextType, Track } from "@/assets/types";

const PlayerContext = createContext<PlayerContextType>({
    // track is option based on the type declaration
    setTrack: ()=>{},
});

export default function PlayerProvider({children} : PropsWithChildren){
    const [track, setTrack] = useState<Track>();

    console.log("Track: ", track);
    return(
       < PlayerContext.Provider value={{track, setTrack}}>
       {children}
       </PlayerContext.Provider>
    )
}
// Helper functinos/hook
export const usePlayerContext = () => useContext(PlayerContext);