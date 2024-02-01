import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { SearchBox } from '../components/searchBox';
import { useState } from 'react';
import { tracks } from '@/assets/data/tracks';
import ArtistCard from '../components/ArtistCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import AlbumCard from '../components/AlbumCard';

export default function SurpriseMeScreen() {
    const [search, setSearch] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <SearchBox search={search} setSearch={setSearch} showProfile={true} showBackButton={true} />
            <View style={styles.container}>
                <Text
                    style={styles.heading}
                >
                    Recomendações para você
                </Text>

                <ScrollView>
                    <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center" }}>

                        {tracks.map((item, index) => (
                            <AlbumCard track={item} key={index} />
                        ))}
                    </View>
                </ScrollView>
            </View>
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
