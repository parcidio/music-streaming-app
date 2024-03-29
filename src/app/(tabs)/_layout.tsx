import React from 'react';
import { Ionicons } from "@expo/vector-icons/";

import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';

import Colors from '../../constants/Colors';
import { useColorScheme } from '../../components/useColorScheme';
import { useClientOnlyValue } from '../../components/useClientOnlyValue';
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import Player from '@/src/components/Player';
import { useTheme } from '@/src/providers/CustomThemeContext';
import { darkColors, lightColors } from '@/src/theme';
import { usePlayerContext } from '@/src/providers/PlayerProvider';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
export function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={21} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: { backgroundColor: isDarkMode ? darkColors.bottomBar : lightColors.bottomBar, borderTopColor: isDarkMode ? darkColors.border : lightColors.border, }, // Set your desired background color here
      }}
      tabBar={(props) => <View><Player /><BottomTabBar  {...props} /></View>} >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,

        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Pesquisa',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="menus"

        options={{
          title: 'Coleções',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="folder" color={color} />,
        }}
      />
      <Tabs.Screen
        name="downloads"
        options={{
          title: 'Downloads',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="download" color={color} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Biblioteca',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
    </Tabs>
  );
}
