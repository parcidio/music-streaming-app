import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TrackListItem from '@/src/components/TrackListItem';
import { tracks } from '@/assets/data/tracks';
import { SearchBox } from '@/src/components/searchBox';

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <SearchBox search={search} setSearch={setSearch} />
      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    paddingVertical: 8,
    color: 'black',
  },
  cancelText: {
    color: 'blue',
    marginLeft: 10,
  },
});
