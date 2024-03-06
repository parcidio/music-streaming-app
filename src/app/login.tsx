import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useTheme } from '../providers/CustomThemeContext';
import { darkColors, lightColors, palette } from '../theme';
import { useLinkTo, useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'; // Import the Modal component
import CountryPicker from '../components/CountryPicker';
import { countries } from '@/assets/data/countries';

const INPUT_OFFSET = 80;

const LoginWithPhone = () => {
    const [form, setForm] = useState({
        phone: '',
        password: '',
    });
    const { isDarkMode } = useTheme();
    const linkTo = useLinkTo();



    const handleLoginPress = () => {
        // Add your logic for handling login here
        linkTo("/(tabs)")

    };


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [selectedCountry, setSelectedCountry] = useState('AO')
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? darkColors.background : lightColors.background }}>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ ...styles.title, color: isDarkMode ? darkColors.text : lightColors.text }}>Faça o Login</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={{ ...styles.inputLabel, color: isDarkMode ? darkColors.text : lightColors.text }} onPress={() => setModalVisible(!isModalVisible)}>{(countries.filter((e) => e.iso == selectedCountry))[0].code.toString()}</Text>
                        <Modal backdropOpacity={.5} backdropColor="black" isVisible={isModalVisible} onBackdropPress={toggleModal} children={<CountryPicker countries={countries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} onClose={toggleModal} />} />

                        <TextInput
                            keyboardType="phone-pad"
                            onChangeText={(phone) => setForm({ ...form, phone })}
                            placeholder="Número de telefone"
                            placeholderTextColor={isDarkMode ? darkColors.text : lightColors.text}
                            returnKeyType="done"
                            style={{ ...styles.inputControl, paddingLeft: INPUT_OFFSET, borderColor: isDarkMode ? darkColors.border : lightColors.border, backgroundColor: isDarkMode ? darkColors.input : lightColors.input }}
                            value={form.phone}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            secureTextEntry
                            onChangeText={(password) => setForm({ ...form, password })}
                            placeholder="Palavra-passe"
                            placeholderTextColor={isDarkMode ? darkColors.text : lightColors.text}
                            returnKeyType="done"
                            style={{ ...styles.inputControl, borderColor: isDarkMode ? darkColors.border : lightColors.border, backgroundColor: isDarkMode ? darkColors.input : lightColors.input }}
                            value={form.password}
                        />
                    </View>

                    <View style={styles.formAction}>
                        <TouchableOpacity activeOpacity={0.5} onPress={handleLoginPress}>
                            <View style={{ ...styles.btn, backgroundColor: palette.primary }}>
                                <Text style={{ ...styles.btnText, color: palette.light }}>Entrar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            // handle link
                            linkTo("/signup")
                        }}
                        style={{ marginTop: 30 }}>
                        <Text style={{ ...styles.formFooter, color: isDarkMode ? darkColors.mutedText : lightColors.text }}>
                            Ainda não és membro? <Text style={{ color: palette.primary }}>Regista-te agora</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    header: {
        marginVertical: 36,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    /** Form */
    form: {
        marginBottom: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginVertical: 12,
    },
    formFooter: {
        fontSize: 14,
        fontWeight: '600',
        color: '#51505a',
        textAlign: 'center',
    },
    /** Input */
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        position: 'absolute',
        width: INPUT_OFFSET,
        lineHeight: 44,
        top: 0,
        left: 0,
        bottom: 0,
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        fontWeight: '500',
        zIndex: 9,
        paddingHorizontal: 5,
    },
    inputControl: {
        height: 44,
        backgroundColor: '#f3eff6',
        paddingLeft: 24,
        paddingRight: 24,
        borderRadius: 12,
        borderWidth: 1,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
    },
    /** Button */
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    btnText: {
        lineHeight: 26,
        fontWeight: '600',
        fontSize: 15,
    },
});

export default LoginWithPhone;
