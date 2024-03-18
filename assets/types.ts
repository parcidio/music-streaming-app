import { AVPlaybackStatusSuccess } from "expo-av/build/AV.types";
import { LinkProps } from "expo-router";
import { Dispatch, SetStateAction } from "react";

export type Track = {
  id: string;
  name: string;
  preview_url?: string | null;
  album: Album;
  artists: Artist[];
};
export type Album = {
  id: string;
  name: string;
  images: Image[];
};
export type Artist = {
  id: string;
  name: string;
  images?: Image[];
};

export type Image = {
  url: string;
  height?: number;
  width?: number;
};

export type PlayerContextType={
  currentTrack?: Track;
  playerFullScreen?: boolean,
  isPlaying?: boolean,
  setCurrentTrack: (currentTrack:Track)=> void;
  setCurrentTrackIndex: Dispatch<SetStateAction<number>>,
  setIsPlaying: Dispatch<SetStateAction<boolean>>,
  setPlayerFullScreen: Dispatch<SetStateAction<boolean>>,
  playPrevTrack: ()=> void,
  playNextTrack: ()=> void,
  onPause: ()=>void
  soundStatus?: AVPlaybackStatusSuccess,
}

export type TrackListItemProps = {
  track: Track
}

export type Genre = {
  title: String
}

export type HrefType = "/" | "/newReleases"| "/menus" | "/albums" | "/artists" | "/hits" | "/newArtists" | "/surpriseMe"| "/dj";


export type Menu = {
  link: HrefType 
  text: String
  color: string
}

export type HeaderProps = {
  link: HrefType 
  linkText: String
  heading: string
  showLink: boolean
}
