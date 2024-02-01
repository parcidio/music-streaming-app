import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useState } from 'react';
import { SearchBox } from '../components/searchBox';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SupriseMeScreen() {
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
