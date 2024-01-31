import { ScrollView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from '../../../components/Themed';
import { tracks } from '@/assets/data/tracks';
import ArtistCard from '@/src/components/ArtistCard';

export default function LibraryArtistsScreen() {
    const Tab = createMaterialTopTabNavigator();

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
                        <ArtistCard track={item} key={index} />
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