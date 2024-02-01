import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SearchBox } from '../components/searchBox';
import { useState } from 'react';

export default function NewArtistsScreen() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <SearchBox search={search} setSearch={setSearch} showProfile={true} showBackButton={true} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
