
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { Track, TrackListItemProps } from '@/assets/types';
import { usePlayerContext } from '../providers/PlayerProvider'
import { useTheme } from "../providers/CustomThemeContext";
import { darkColors, lightColors } from "../theme";

export default function TrackListItem({ track }: TrackListItemProps) {
  const { currentTrack, setCurrentTrack } = usePlayerContext();
  const image = track.album?.images?.[0];

  const { isDarkMode } = useTheme();

  return (
    <Pressable
      onPress={() => setCurrentTrack(track)}
      style={styles.container}
    >
      {image && <Image source={{ uri: image.url }} style={styles.image} />}
      <View style={styles.containerActive}>
        <Text style={{ ...styles.title, color: isDarkMode ? darkColors.mutedText : lightColors.text }}
          numberOfLines={1} ellipsizeMode="tail">{track.name}</Text>
        <Text style={{ ...styles.subtitle, color: isDarkMode ? darkColors.mutedText : lightColors.text }}>{track.artists[0]?.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',

  },
  containerActive: {
    width: '75%',

    gap: 5,
  },
  title: {
    fontWeight: '500',
    // color: 'black',
    flexWrap: "wrap",
    fontSize: 14,
  },
  subtitle: {
    fontSize: 14,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 5,
  },
});