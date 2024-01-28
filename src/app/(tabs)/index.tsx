import { StyleSheet, FlatList } from 'react-native';

import { View } from '../../components/Themed';
import {tracks}  from '../../../assets/data/tracks'
import TrackListItem from '../../../src/components/TrackListItem';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
  
    <View style={styles.container}>
      <FlatList data={tracks} renderItem={({item})=><TrackListItem track={item}/>} showsVerticalScrollIndicator={true}/>
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
