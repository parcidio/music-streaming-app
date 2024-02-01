import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  Pressable,
} from 'react-native';
import { Ionicons } from "@expo/vector-icons/";
import { tracks } from '@/assets/data/tracks';


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

  return (
    <SafeAreaView >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            <Image
              alt=""
              source={{
                uri: tracks[0].album?.images?.[0].url,
              }}
              style={styles.profileAvatar} />

            <View>
              <Text style={styles.profileName}>Parcidio Andre</Text>
              <Text style={styles.profileHandle}>parcidioandre@gmail.com</Text>
            </View>
          </View>

          <Pressable
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Profile</Text>
              <Ionicons color="#fff" name="pencil" size={16} />
            </View>
          </Pressable>
        </View>

        <View style={styles.content}>
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
                    <View style={styles.tab}>

                      <Text
                        style={[
                          styles.tabText,
                          isActive && { color: 'red' },
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
                index === 0 && { borderTopWidth: 0 },
              ]}>
              <Pressable
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.row}>
                  <Text style={styles.rowLabel}>{label}</Text>

                  <View style={styles.rowSpacer} />

                  {type === 'input' && (
                    <Text style={styles.rowValue}>{value}</Text>
                  )}

                  {type === 'boolean' && (
                    <Switch trackColor={{ true: 'black' }} value={value} />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
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
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderColor: '#e5e7eb',
    borderBottomWidth: 2,
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