import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useLinkTo } from '@react-navigation/native';
import { darkColors, lightColors } from '../theme';
import { useTheme } from '../providers/CustomThemeContext';

const SplashScreen = () => {
    const linkTo = useLinkTo();
    const { isDarkMode } = useTheme();

    // Simulate loading time with useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            // Navigate to the desired screen after the splash screen
            linkTo("/login"); // Replace 'Home' with the name of your desired screen
        }, 2000); // Adjust the time as needed

        return () => clearTimeout(timer);
    }, [linkTo]);

    return (
        <View style={{ ...styles.container, backgroundColor: isDarkMode ? darkColors.background : lightColors.background }}>
            {/* Add your app's logo or branding image */}
            <Image source={require('../../assets/images/splash-logo-all.png')} style={styles.logo} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 450, // Set your logo's width
        height: 450, // Set your logo's height
        resizeMode: 'contain',
    },
    appName: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333', // Set your desired text color
    },
});

export default SplashScreen;
