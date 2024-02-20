import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../../../components/Themed';
import AlbumCard from '@/src/components/AlbumCard';
import { tracks } from '@/assets/data/tracks';
import { useMemo, useState } from 'react';
import { useTheme } from '@/src/providers/CustomThemeContext';
import { darkColors, lightColors } from '@/src/theme';
import Header from '@/src/components/Header';

const SECTIONS = [
    {
        header: 'Todos',
        items: [
            ...tracks
        ],
    },
    {
        header: 'Favourites',
        items: [
            {
                id: '6eT7xZZlB2mwyzJ2sUKG6w',
                name: 'White Iverson',
                preview_url: 'https://www.kozco.com/tech/piano2.wav',
                artists: [
                    {
                        id: '246dkjvS1zLTtiykXe5h60',
                        name: 'Post Malone',
                    },
                ],
                album: {
                    id: '5s0rmjP8XOPhP6HhqOhuyC',
                    name: 'Stoney (Deluxe)',
                    images: [
                        {
                            url: 'https://i.scdn.co/image/ab67616d0000b27355404f712deb84d0650a4b41',
                            height: 640,
                            width: 640,
                        },
                        {
                            url: 'https://i.scdn.co/image/ab67616d00001e0255404f712deb84d0650a4b41',
                            height: 300,
                            width: 300,
                        },
                        {
                            url: 'https://i.scdn.co/image/ab67616d0000485155404f712deb84d0650a4b41',
                            height: 64,
                            width: 64,
                        },
                    ],
                },
            },
            ...tracks
        ],
    },
    {
        header: 'Recents',
        items: [
            ...tracks
        ],
    },

];

export default function LibraryTracksScreen() {
    // const Tab = createMaterialTopTabNavigator();
    const [value, setValue] = useState(0);
    const [currentTab, setCurrentTab] = useState("");
    const { tabs, items } = useMemo(() => {
        setCurrentTab(SECTIONS[value].header)

        return {
            tabs: SECTIONS.map(({ header }) => ({
                name: header,
            })),
            items: SECTIONS[value].items,
        };
    }, [value]);


    const { isDarkMode } = useTheme();


    return (
        // <View style={{ ...styles.container, backgroundColor: "red" }}>
        <View style={{ ...styles.content, backgroundColor: isDarkMode ? darkColors.background : lightColors.background }}>
            <View style={{ ...styles.tabs, backgroundColor: isDarkMode ? darkColors.background : lightColors.background }}>
                {tabs.map(({ name }: any, index) => {
                    const isActive = index === value;

                    return (
                        <View
                            key={name}
                            style={{
                                ...styles.tabWrapper,
                                backgroundColor: isDarkMode ? darkColors.background : lightColors.background
                            }}>
                            <Pressable
                                onPress={() => {
                                    setValue(index);
                                }}>
                                <View style={!isActive ? { ...styles.tab, backgroundColor: isDarkMode ? darkColors.tab : lightColors.tab } : { ...styles.tab, backgroundColor: 'red' }}>

                                    <Text
                                        style={[
                                            styles.tabText,
                                            isDarkMode ? { color: darkColors.tabText } : { color: lightColors.tabText },
                                            isActive && { color: lightColors.tabText },
                                        ]}>
                                        {name}
                                    </Text>
                                </View>
                            </Pressable>
                        </View>
                    );
                })}
            </View>
            <Header heading={currentTab} showLink={false} link={'/'} linkText={""} />
            <ScrollView>
                <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center", backgroundColor: isDarkMode ? darkColors.background : lightColors.background }}>
                    {items.map((item, index) => (
                        <AlbumCard
                            track={item} key={index} />
                    ))}
                </View>
            </ScrollView>
        </View>
        /* </View> */
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
        // color: '#6b7280',
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