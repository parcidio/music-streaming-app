import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import TrackListItem from '../components/TrackListItem';
import { SearchBox } from '../components/searchBox';
import search from './(tabs)/search';
import { useState } from 'react';
import AlbumCard from '../components/AlbumCard';
import { tracks } from '@/assets/data/tracks';
import Header from '../components/Header';
import { useTheme } from '../providers/CustomThemeContext';
import { darkColors, lightColors } from '../theme';

export default function HitsScreen() {
    const [search, setSearch] = useState('');
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <SafeAreaView style={{
            ...styles.container, backgroundColor:
                isDarkMode ? darkColors.background : lightColors.background
        }}>
            <SearchBox search={search} setSearch={setSearch} showProfile={true} showBackButton={true} />
            {/* <View style={{
                backgroundColor:
                    isDarkMode ? darkColors.background : lightColors.background
            }}> */}
            <Header heading={" Os melhores hits"} showLink={false} link={'/'} linkText={""} />


            <ScrollView>
                <View style={{
                    display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center", backgroundColor:
                        isDarkMode ? darkColors.background : lightColors.background
                }}>

                    {tracks.map((item, index) => (
                        <AlbumCard track={item} key={index} />
                    ))}
                </View>
            </ScrollView>
            {/* </View> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
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
    heading: {
        display: "flex",
        color: "black",
        fontSize: 19,
        fontWeight: "bold",
        marginHorizontal: 10,
        marginTop: 10,
        textAlign: "left",
        justifyContent: "flex-start",
    },
});
