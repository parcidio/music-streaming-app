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
import { useLocal } from '../providers/CustomLocalizationContext';
import { SearchBox } from '../components/searchBox';
import { darkColors, lightColors, palette } from '../theme';
import { Link } from 'expo-router';
import Modal from 'react-native-modal'; // Import the Modal component
import { countries } from '@/assets/data/countries';
import CountryPicker from '../components/CountryPicker';


export default function ProfileScreen() {
  const [value, setValue] = useState(0);
  const { language,
    local,
    setLanguage,
    setLocal, } = useLocal();
  const SECTIONS = [
    {
      header: 'Definições',
      items: [
        { label: 'Lingua', value: language, type: 'input' },
        { label: 'Local', value: (countries.filter((e) => e.iso == local))[0].name.toString(), type: 'input' },
        { label: 'Tema Escuro', value: false, type: 'boolean' },
        { label: 'Use Wi-Fi', value: true, type: 'boolean' },
        { label: 'Receber notificações', value: false, type: 'boolean' },
      ],
    },
    {
      header: 'Suporte',
      items: [
        { label: 'Mensagens', type: 'link', notification: ['welcome'] },
        { label: 'Termos de uso', type: 'link' },
      ],
    },
  ];
  const { tabs, items } = useMemo(() => {
    return {
      tabs: SECTIONS.map(({ header }) => ({
        name: header,
      })),
      items: SECTIONS[value].items,
    };
  }, [value]);

  const { isDarkMode, toggleTheme } = useTheme();


  const [isCountryVisible, setIsCountryVisible] = useState(false);

  const toggleModal = () => {
    setIsCountryVisible(!isCountryVisible);
  };


  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: isDarkMode ? darkColors.background : lightColors.background }}>
      <SearchBox title={"Perfil"} showSearchBox={false} showProfile={false} showBackButton={true} />
      <Modal backdropOpacity={.5} backdropColor="black" isVisible={isCountryVisible} onBackdropPress={toggleModal} children={<CountryPicker countries={countries} selectedCountry={local} setSelectedCountry={setLocal} onClose={toggleModal} />} />

      <View style={styles.profile}>
        <View style={styles.profileHeader}>
          <Image
            alt=""
            source={{
              uri: tracks[0].album?.images?.[0].url,
            }}
            style={styles.profileAvatar} />

          <View>
            <Text style={{ ...styles.profileName, color: isDarkMode ? darkColors.text : lightColors.text }}>Parcidio Andre</Text>
            <Text style={styles.profileHandle}>exemplo@gmail.com</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            // handle onPress
          }}>
          <View style={{ ...styles.profileAction, backgroundColor: isDarkMode ? darkColors.button : lightColors.button }}>
            <Text style={{ ...styles.profileActionText, color: isDarkMode ? darkColors.buttonText : lightColors.buttonText }}>Edit Profile</Text>
            <Ionicons color={isDarkMode ? darkColors.buttonIcon : lightColors.buttonIcon} name="pencil" size={16} />
          </View>
        </TouchableOpacity>
        <Link href="/login" asChild>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // handle onPress
            }}>
            <View style={{ ...styles.profileAction, backgroundColor: isDarkMode ? darkColors.button : lightColors.button }}>

              <Text style={{ ...styles.profileActionText, color: palette.primary }}>Log out</Text>


              <Ionicons color={palette.primary} name="exit" size={16} />
            </View>
          </TouchableOpacity>
        </Link>

      </View>

      <ScrollView>
        <View style={styles.content}>
          <View style={styles.tabs}>
            {tabs.map(({ name }: any, index) => {
              const isActive = index === value;

              return (
                <View
                  key={name}
                  style={[
                    styles.tabWrapper,

                    isActive && { borderBottomColor: darkColors.activeTab },
                  ]}>
                  <Pressable
                    onPress={() => {
                      setValue(index);
                    }}>
                    <View style={!isActive ? { ...styles.tab, backgroundColor: isDarkMode ? darkColors.tab : lightColors.tab, } : { ...styles.tab, backgroundColor: isDarkMode ? darkColors.activeTab : lightColors.activeTab }}>

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

          {items.map(({ label, type, value, notification }: any, index) => (
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
                  if (label == 'Local') {
                    setIsCountryVisible(true)
                  }
                }}>
                <View style={styles.row}>
                  <Text style={{ ...styles.rowLabel, color: isDarkMode ? 'white' : darkColors.background }}>{label}</Text>

                  <View style={styles.rowSpacer} />

                  {type === 'input' && (
                    <Text style={styles.rowValue}>{value}</Text>
                  )}

                  {type === 'boolean' && (
                    <Switch trackColor={{ true: palette.primary, false: isDarkMode ? darkColors.switch : lightColors.switch }} thumbColor={"red"} value={label == 'Tema Escuro' && isDarkMode} onChange={label == 'Tema Escuro' ? toggleTheme : () => { }} />
                  )}
                  {(notification?.length > 0) && (
                    <View style={{ backgroundColor: "red", padding: 3, borderRadius: 10, alignContent: "center", }}>
                      <Text style={{ color: "white", marginHorizontal: 4 }}>{notification?.length}</Text>
                    </View>)}
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
        <Text style={styles.contentFooter}>App Version 1.0</Text>
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
  // Content
  contentFooter: {

    marginTop: 24,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: '#a69f9f',
  },
});