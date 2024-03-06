import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Text,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function CountryPicker({ onClose, countries, setSelectedCountry, selectedCountry }: any) {
    const [value, setValue] = useState(0);

    return (
        <View style={{
            flex: 1, backgroundColor: '#f6f6f6',
            borderRadius: 10,
            margin: 0,
        }}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => onClose()}
                    style={styles.headerClose}>
                    <FontAwesome color="#1d1d1d" name="times" size={24} />
                </TouchableOpacity>

                <View style={styles.header}>
                    <Text style={styles.title}>Selecione a sua localização</Text>

                    <Text style={styles.subtitle}>
                        Os termos e serviços que se aplicam a você dependerão do seu país de residência
                    </Text>
                </View>

                <ScrollView contentContainerStyle={styles.content}>
                    {countries.map(({ iso, name, code }: any, index: any) => {
                        const isActive = iso === selectedCountry;

                        return (
                            <TouchableOpacity
                                key={iso}
                                onPress={() => {
                                    // setValue(index);
                                    setSelectedCountry(iso)
                                }}
                                style={styles.radioWrapper}>
                                <Image
                                    alt={`Flag of ${name}`}
                                    style={styles.radioImage}
                                    source={{
                                        uri: `https://flagsapi.com/${iso}/flat/64.png`,
                                    }} />

                                <View
                                    style={[styles.radio, { borderTopWidth: 0 }]}>
                                    <Text style={styles.radioLabel}>{name}</Text>
                                    <View
                                        style={[
                                            styles.radioCheck,
                                            isActive && styles.radioCheckActive,
                                        ]}>
                                        <FontAwesome
                                            color="#fff"
                                            name="check"
                                            style={!isActive && { display: 'none' }}
                                            size={12} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
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
        color: '#a69f9f',
    },
    content: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e8e8e8',
    },
    /** Header */
    header: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 10,
    },
    headerClose: {
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        marginTop: 6,
        marginBottom: 16,
    },
    /** Radio */
    radio: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: '#e8e8e8',
        height: 54,
        paddingRight: 24,
    },
    radioWrapper: {
        paddingLeft: 24,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    radioImage: {
        width: 30,
        height: 30,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222222',
        marginBottom: 2,
    },
    radioCheck: {
        width: 22,
        height: 22,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        borderWidth: 1,
        borderColor: '#999B9A',
    },
    radioCheckActive: {
        borderColor: '#007bff',
        backgroundColor: '#007bff',
    },
});