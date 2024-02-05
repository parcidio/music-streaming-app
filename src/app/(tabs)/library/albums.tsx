import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from '../../../components/Themed';
import AlbumCard from '@/src/components/AlbumCard';
import { tracks } from '@/assets/data/tracks';
import { useMemo, useState } from 'react';

const SECTIONS = [
    {
        header: 'Todos',
        items: [
            { label: 'Lingua', value: 'Português', type: 'input' },
            { label: 'Local', value: 'Angola', type: 'input' },
            { label: 'Tema Escuro', value: false, type: 'boolean' },
            { label: 'Use Wi-Fi', value: true, type: 'boolean' },
        ],
    },
    {
        header: 'Favourites',
        items: [
            { label: 'Envie um email', type: 'link' },
            { label: 'Mensagens', type: 'link' },
        ],
    },
];

export default function LibraryAlbumsScreen() {
    // const Tab = createMaterialTopTabNavigator();
    const [value, setValue] = useState(0);
    const { tabs, items } = useMemo(() => {
        return {
            tabs: SECTIONS.map(({ header }) => ({
                name: header,
            })),
            items: SECTIONS[value].items,
        };
    }, [value]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.tabs}>
                    {tabs.map(({ name }: any, index) => {
                        const isActive = index === value;

                        return (
                            <View
                                key={name}
                                style={[
                                    styles.tabWrapper,

                                ]}>
                                <Pressable
                                    onPress={() => {
                                        setValue(index);
                                    }}>
                                    <View style={!isActive ? { ...styles.tab } : { ...styles.tab, backgroundColor: 'red' }}>

                                        <Text
                                            style={[
                                                styles.tabText,
                                                isActive && { color: 'white' },
                                            ]}>
                                            {name}
                                        </Text>
                                    </View>
                                </Pressable>
                            </View>
                        );
                    })}
                </View>

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
    // 


    header: {
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 12,
    },

    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
    },
    content: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
    },
    tabs: {
        padding: 16,
        flexDirection: 'row',
        gap: 10,
    },
    /** Profile */
    profile: {
        paddingTop: 12,
        paddingHorizontal: 24,
        paddingBottom: 24,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 9999,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 12,
    },
    profileName: {
        fontSize: 17,
        fontWeight: '600',
        color: '#3d3d3d',
    },
    profileHandle: {
        marginTop: 4,
        fontSize: 15,
        color: '#989898',
    },
    profileAction: {
        marginTop: 16,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 12,
    },
    profileActionText: {
        marginRight: 8,
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
    },
    /** Tab */
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 1,
        borderRadius: 5,
    },
    tabWrapper: {
        // flexGrow: 1,
        // flexShrink: 1,
        // flexBasis: 0,
        // borderColor: '#e5e7eb',
        // borderBottomWidth: 2,
        gap: 2,
    },
    tabText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#6b7280',
        marginLeft: 5,
    },
    /** Row */
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        paddingLeft: 24,
        paddingRight: 24,
    },
    rowWrapper: {
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#2c2c2c',
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    rowValue: {
        fontSize: 15,
        fontWeight: '500',
        color: '#7f7f7f',
        marginRight: 4,
    },
});