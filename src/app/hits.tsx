import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, SafeAreaView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import TrackListItem from '../components/TrackListItem';
import { SearchBox } from '../components/searchBox';
import tracks from './(tabs)/library/tracks';
import search from './(tabs)/search';
import { useState } from 'react';

export default function HitsScreen() {
    const [search, setSearch] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <SearchBox search={search} setSearch={setSearch} showProfile={true} showBackButton={true} />

        </SafeAreaView>
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
