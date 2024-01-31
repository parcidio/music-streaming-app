import { FlatList, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import React from 'react';
import GenreCard from '@/src/components/Genre';
import AlbumCard from '@/src/components/AlbumCard';
import { tracks } from '@/assets/data/tracks';

export default function LibraryTracksScreen() {
    return (
        <View style={styles.container}>
            <Text
                style={styles.heading}
            >
                Favoritos
            </Text>
            <ScrollView>
                <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center" }}>

                    {tracks.map((item, index) => (
                        <AlbumCard track={item} key={index} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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