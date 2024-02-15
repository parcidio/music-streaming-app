// ThemeContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from '../components/useColorScheme';
import { Appearance } from 'react-native';

interface ThemeContextProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const colorScheme = useColorScheme();


    const [currentTheme, setCurrentTheme] = useState(Appearance.getColorScheme);
    Appearance.addChangeListener((scheme) => {
        console.log("scheme : ", scheme.colorScheme)
        scheme.colorScheme === 'dark' ? setIsDarkMode(true) : setIsDarkMode(false);

    })
    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
        Appearance.setColorScheme('dark')
    };

    useEffect(() => {
        const loadTheme = async () => {
            try {
                const storedTheme = await AsyncStorage.getItem('theme');
                if (storedTheme !== null) {
                    const parsedStoredTheme = JSON.parse(storedTheme);
                    setIsDarkMode(parsedStoredTheme);
                    // change the appearance on load
                    console.log("parsedStoredTheme : ", parsedStoredTheme);

                    if (parsedStoredTheme == false) return


                }
            } catch (error) {
                console.error('Error loading theme:', error);
            }
        };


        loadTheme();


    }, []);

    useEffect(() => {
        const saveTheme = async () => {
            try {
                await AsyncStorage.setItem('theme', JSON.stringify(isDarkMode));
            } catch (error) {
                console.error('Error saving theme:', error);
            }
        };

        saveTheme();
    }, [isDarkMode]);

    const themeContextValue: ThemeContextProps = {
        isDarkMode,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export { CustomThemeProvider, useTheme };
