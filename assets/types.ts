import { LinkProps } from "expo-router";

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
  setCurrentTrack: (currentTrack:Track)=> void;
}

export type TrackListItemProps = {
  track: Track
}

export type Genre = {
  title: String
}

type HrefType = "/newReleases" | "/hits" | "/newArtists" | "/surpriseMe"| "/dj";


export type Menu = {
  link: HrefType 
  text: String
  color: string
}
