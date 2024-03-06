import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import { darkColors, lightColors, palette } from '../theme';
import { useTheme } from '../providers/CustomThemeContext';
import { SearchBox } from '../components/searchBox';
import { useLinkTo, useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'; // Import the Modal component
import CountryPicker from '../components/CountryPicker';
import { countries } from '@/assets/data/countries';

const INPUT_OFFSET = 80;

export default function SignUp() {
    const [form, setForm] = useState({
        phone: '',
        password: '',
    });
    const { isDarkMode } = useTheme();
    const navigation = useNavigation();

    const linkTo = useLinkTo();


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [selectedCountry, setSelectedCountry] = useState('AO')
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? darkColors.background : lightColors.background }}>
            <View style={styles.container}>
                {/* <SearchBox showBackButton={true} showProfile={false} showSearchBox={false} /> */}

                <View style={styles.header}>
                    <Text style={{ ...styles.title, color: isDarkMode ? darkColors.text : lightColors.text }}>Inscreva-se</Text>

                    <Text style={{ ...styles.subtitle, color: isDarkMode ? darkColors.mutedText : lightColors.text }}>
                        Digite seu número de telefone e depois você receberá um código de 4 dígitos para verificar sua conta
                    </Text>
                </View>

                <ScrollView>

                    <View style={styles.form}>
                        <View style={styles.input}>

                            <TextInput

                                keyboardType="name-phone-pad"
                                onChangeText={phone => setForm({ ...form, phone })}
                                placeholder="Nome"
                                placeholderTextColor={isDarkMode ? darkColors.text : lightColors.text}
                                returnKeyType="done"
                                style={{ ...styles.inputControl, borderColor: isDarkMode ? darkColors.border : lightColors.border, backgroundColor: isDarkMode ? darkColors.input : lightColors.input }}
                                value={form.phone} />
                        </View>
                        <View style={styles.input}>

                            <TextInput

                                keyboardType="email-address"
                                onChangeText={phone => setForm({ ...form, phone })}
                                placeholder="Email"
                                placeholderTextColor={isDarkMode ? darkColors.text : lightColors.text}
                                returnKeyType="done"
                                style={{ ...styles.inputControl, borderColor: isDarkMode ? darkColors.border : lightColors.border, backgroundColor: isDarkMode ? darkColors.input : lightColors.input }}
                                value={form.phone} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ ...styles.inputLabel, color: isDarkMode ? darkColors.text : lightColors.text }} onPress={() => setModalVisible(!isModalVisible)}>{(countries.filter((e) => e.iso == selectedCountry))[0].code.toString()}</Text>
                            <Modal backdropOpacity={.5} backdropColor="black" isVisible={isModalVisible} onBackdropPress={toggleModal} children={<CountryPicker countries={countries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} onClose={toggleModal} />} />

                            <TextInput

                                keyboardType="phone-pad"
                                onChangeText={phone => setForm({ ...form, phone })}
                                placeholder="Número de telefone"
                                placeholderTextColor={isDarkMode ? darkColors.text : lightColors.text}
                                returnKeyType="done"

                                style={{ ...styles.inputControl, paddingLeft: INPUT_OFFSET, borderColor: isDarkMode ? darkColors.border : lightColors.border, backgroundColor: isDarkMode ? darkColors.input : lightColors.input }}
                                value={form.phone} />
                        </View>
                        <View style={styles.input}>

                            <TextInput

                                keyboardType="name-phone-pad"
                                onChangeText={phone => setForm({ ...form, phone })}
                                placeholder="Palavra-passe"
                                placeholderTextColor={isDarkMode ? darkColors.text : lightColors.text}
                                returnKeyType="done"
                                style={{ ...styles.inputControl, borderColor: isDarkMode ? darkColors.border : lightColors.border, backgroundColor: isDarkMode ? darkColors.input : lightColors.input }}
                                value={form.phone} />
                        </View>
                        <View style={styles.input}>

                            <TextInput

                                keyboardType="name-phone-pad"
                                onChangeText={phone => setForm({ ...form, phone })}
                                placeholder="Confirmar palavra-passe"
                                placeholderTextColor={isDarkMode ? darkColors.text : lightColors.text}
                                returnKeyType="done"
                                style={{ ...styles.inputControl, borderColor: isDarkMode ? darkColors.border : lightColors.border, backgroundColor: isDarkMode ? darkColors.input : lightColors.input }}
                                value={form.phone} />
                        </View>
                        <View style={styles.formAction}>
                            <TouchableOpacity
                                activeOpacity={.5}
                                onPress={() => {
                                    // handle onPress
                                    linkTo("/otp")

                                }}>
                                <View style={{ ...styles.btn, backgroundColor: palette.primary }}>

                                    <Text style={{ ...styles.btnText, color: palette.light }}>Continua</Text>


                                </View>
                            </TouchableOpacity>


                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                // handle link
                                linkTo("/login")

                            }}
                            style={{ marginTop: 30 }}>
                            <Text style={{ ...styles.formFooter, color: isDarkMode ? darkColors.mutedText : lightColors.text }}>
                                Já és um membro?<Text style={{ color: palette.primary }}> faça o login</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}

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
    subtitle: {
        fontSize: 15,
        fontWeight: '500',

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
    formActionSpacer: {
        marginVertical: 32,
        fontSize: 14,
        fontWeight: '600',
        color: '#4b4858',
        textAlign: 'center',
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
        borderWidth: 1, fontSize: 15,
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
    btnSecondary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderColor: '#000',
        marginBottom: 12,
    },
    btnSecondaryText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#000',
    },
});