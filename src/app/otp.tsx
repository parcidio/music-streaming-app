import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { darkColors, lightColors, palette } from '../theme';
import { useTheme } from '../providers/CustomThemeContext';
import { SearchBox } from '../components/searchBox';
import { useLinkTo, useNavigation } from '@react-navigation/native';


export default function OTPVerification() {
    const [otp, setOtp] = useState('');
    const { isDarkMode } = useTheme();
    const linkTo = useLinkTo();

    const handleVerify = () => {
        // Handle OTP verification logic
        linkTo("/(tabs)")

    };



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? darkColors.background : lightColors.background }}>
            <View style={styles.container}>
                <SearchBox showBackButton={true} showProfile={false} showSearchBox={false} />

                <View style={styles.header}>
                    <Text style={{ ...styles.title, color: isDarkMode ? darkColors.text : lightColors.text }}>Verificação de OTP</Text>
                    <Text style={{ ...styles.subtitle, color: isDarkMode ? darkColors.mutedText : lightColors.text }}>
                        Insira o código de 4 dígitos enviado para o seu número de telefone.
                    </Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={otpInput => setOtp(otpInput)}
                        placeholder="Código OTP"
                        placeholderTextColor={isDarkMode ? darkColors.text : lightColors.text}
                        returnKeyType="done"
                        style={{ ...styles.inputControl, borderColor: isDarkMode ? darkColors.border : lightColors.border, backgroundColor: isDarkMode ? darkColors.input : lightColors.input }}
                        value={otp}
                    />

                    <View style={styles.formAction}>
                        <TouchableOpacity
                            activeOpacity={.5}
                            onPress={handleVerify}>
                            <View style={{ ...styles.btn, backgroundColor: palette.primary }}>
                                <Text style={{ ...styles.btnText, color: palette.light }}>Verificar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            // handle otp resent

                        }}
                        style={{ marginTop: 30 }}>
                        <Text style={{ ...styles.formFooter, color: isDarkMode ? darkColors.mutedText : lightColors.text }}>
                            Ainda não recebeu um otp? <Text style={{ color: palette.primary }}>Reenvia um o otp</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexGrow: 1,
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
    form: {
        marginBottom: 24,
    },
    formAction: {
        marginVertical: 12,
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
    formFooter: {
        fontSize: 14,
        fontWeight: '600',
        color: '#51505a',
        textAlign: 'center',
    },
});
