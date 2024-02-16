import React, { useMemo, useState } from 'react';
import {
  StyleSheet,

  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons/";
import { tracks } from '@/assets/data/tracks';
import { useTheme } from '../providers/CustomThemeContext';
import { SearchBox } from '../components/searchBox';

const SECTIONS = [
  {
    header: 'Definições',
    items: [
      { label: 'Lingua', value: 'Português', type: 'input' },
      { label: 'Local', value: 'Angola', type: 'input' },
      { label: 'Tema Escuro', value: false, type: 'boolean' },
      { label: 'Use Wi-Fi', value: true, type: 'boolean' },
    ],
  },
  {
    header: 'Suporte',
    items: [
      { label: 'Envie um email', type: 'link' },
      { label: 'Mensagens', type: 'link' },
    ],
  },
];

export default function ProfileScreen() {
  const [value, setValue] = useState(0);
  const { tabs, items } = useMemo(() => {
    return {
      tabs: SECTIONS.map(({ header }) => ({
        name: header,
      })),
      items: SECTIONS[value].items,
    };
  }, [value]);

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: isDarkMode ? 'black' : 'white' }}>
      <SearchBox title={"Perfil"} showSearchBox={false} showProfile={false} showBackButton={true} />
      <View style={styles.profile}>
        <View style={styles.profileHeader}>
          <Image
            alt=""
            source={{
              uri: tracks[0].album?.images?.[0].url,
            }}
            style={styles.profileAvatar} />

          <View>
            <Text style={{ ...styles.profileName, color: isDarkMode ? 'white' : 'black' }}>Parcidio Andre</Text>
            <Text style={styles.profileHandle}>parcidioandre@gmail.com</Text>
          </View>
        </View>

        <Pressable
          onPress={() => {
            // handle onPress
          }}>
          <View style={{ ...styles.profileAction, backgroundColor: isDarkMode ? 'white' : 'black' }}>
            <Text style={{ ...styles.profileActionText, color: isDarkMode ? 'black' : 'white' }}>Edit Profile</Text>
            <Ionicons color={isDarkMode ? 'black' : 'white'} name="pencil" size={16} />
          </View>
        </Pressable>
      </View>

      <ScrollView>

        <View style={{ ...styles.content, borderColor: isDarkMode ? "white" : 'black' }}>
          <View style={styles.tabs}>
            {tabs.map(({ name }: any, index) => {
              const isActive = index === value;

              return (
                <View
                  key={name}
                  style={[
                    styles.tabWrapper,

                    isActive && { borderBottomColor: 'black' },
                  ]}>
                  <Pressable
                    onPress={() => {
                      setValue(index);
                    }}>
                    <View style={!isActive ? { ...styles.tab, backgroundColor: isDarkMode ? 'white' : 'black', } : { ...styles.tab, backgroundColor: 'red' }}>

                      <Text
                        style={[
                          styles.tabText,
                          isDarkMode ? { color: 'black' } : { color: 'white' },
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

          {items.map(({ label, type, value }: any, index) => (
            <View
              key={label}
              style={[
                styles.rowWrapper,
                isDarkMode ? { borderColor: 'white' } : { borderColor: '#2c2c2c' },
                index === 0 && { borderTopWidth: 0 },
              ]}>
              <Pressable
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.row}>
                  <Text style={{ ...styles.rowLabel, color: isDarkMode ? 'white' : 'black' }}>{label}</Text>

                  <View style={styles.rowSpacer} />

                  {type === 'input' && (
                    <Text style={styles.rowValue}>{value}</Text>
                  )}

                  {type === 'boolean' && (
                    <Switch trackColor={{ true: 'red', }} thumbColor="red" value={label == 'Tema Escuro' && isDarkMode} onChange={label == 'Tema Escuro' ? toggleTheme : () => { }} />
                  )}

                  {(type === 'input' || type === 'link') && (
                    <Ionicons
                      color="red"
                      name="chevron-forward-sharp"
                      size={20} />
                  )}
                </View>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  content: {
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    marginHorizontal: 10,

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
    marginRight: 12,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
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
    borderRadius: 6,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
  },
  /** Tab */
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
    overflow: 'hidden',
    elevation: 1,
    borderRadius: 5,
  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    gap: 2,
    // borderColor: '#e5e7eb',
    // borderBottomWidth: 2,
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
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
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