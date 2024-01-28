import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import {tracks}  from '../../../assets/data/tracks'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import TrackListItem from '../../../src/components/TrackListItem';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList data={tracks} renderItem={({item})=><TrackListItem track={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
