// import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';

// export default function LibraryScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Library</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="app/(tabs)/two.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });


/*
Inspiration: https://dribbble.com/shots/3894781-Urbanears-Headphones
Twitter: http://twitter.com/mironcatalin
GitHub: http://github.com/catalinmiron
Video Tutorial: https://youtu.be/cGTD4yYgEHc
*/

import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LibraryTracksScreen from './tracks';
import LibraryAlbumsScreen from './albums';
import LibraryArtistsScreen from './artists';
import { darkColors, lightColors } from '@/src/theme';
import { useTheme } from '@/src/providers/CustomThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBox } from '@/src/components/searchBox';

const { width, height } = Dimensions.get('window');
const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.6;
const Tab = createMaterialTopTabNavigator();

export default function LibraryScreen() {
  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: isDarkMode ? darkColors.background : lightColors.background }}>
      <SearchBox showBackButton={false} showSearchBox={false} title={"Library"} />
      <Tab.Navigator

        initialRouteName="tracks"
        screenOptions={{
          tabBarActiveTintColor: isDarkMode ? darkColors.text : lightColors.text,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: darkColors.activeTab },
          tabBarStyle: { backgroundColor: isDarkMode ? darkColors.background : lightColors.background, elevation: 0, },
        }}
      >
        <Tab.Screen
          name="tracks"
          component={LibraryTracksScreen}
          options={{ tabBarLabel: 'Tracks' }}
        />
        <Tab.Screen
          name="albums"
          component={LibraryAlbumsScreen}
          options={{ tabBarLabel: 'Albums' }}
        />
        <Tab.Screen

          name="artists"
          component={LibraryArtistsScreen}
          options={{ tabBarLabel: 'Artistas' }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: width * 0.75,
    height: width * 0.75,
    resizeMode: 'contain',
    flex: 1,
  },
  textContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    flex: 0.5,
  },
  heading: {
    color: '#444',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5,
  },
  description: {
    color: '#ccc',
    fontWeight: '600',
    textAlign: 'left',
    width: width * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
  logo: {
    opacity: 0.9,
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    resizeMode: 'contain',
    position: 'absolute',
    left: 10,
    bottom: 10,
    transform: [
      { translateX: -LOGO_WIDTH / 2 },
      { translateY: -LOGO_HEIGHT / 2 },
      { rotateZ: '-90deg' },
      { translateX: LOGO_WIDTH / 2 },
      { translateY: LOGO_HEIGHT / 2 },
    ],
  },
  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    flexDirection: 'row',
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  tickerContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    overflow: 'hidden',
    height: TICKER_HEIGHT,
  },
  tickerText: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    textTransform: 'uppercase',
    fontWeight: '800',
  },

  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    top: '15%',
  },
});