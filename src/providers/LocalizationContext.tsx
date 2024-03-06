// LocalContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from '../components/useColorScheme';
import { Appearance } from 'react-native';

interface LocalContextProps {
    language: String;
    local: String;
    toggleLocal: () => void;
}

const LocalContext = createContext<LocalContextProps | undefined>(undefined);

interface LocalProviderProps {
    children: React.ReactNode;
}

const CustomLocalProvider: React.FC<LocalProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const colorScheme = useColorScheme();


    const [currentLocal, setCurrentLocal] = useState(Appearance.getColorScheme);
    Appearance.addChangeListener((scheme) => {
        console.log("scheme : ", scheme.colorScheme)
        scheme.colorScheme === 'dark' ? setIsDarkMode(true) : setIsDarkMode(false);

    })
    const toggleLocal = () => {
        setIsDarkMode((prev) => !prev);
        Appearance.setColorScheme('dark')
    };

    useEffect(() => {
        const loadLocal = async () => {
            try {
                const storedLocal = await AsyncStorage.getItem('theme');
                if (storedLocal !== null) {
                    const parsedStoredLocal = JSON.parse(storedLocal);
                    setIsDarkMode(parsedStoredLocal);
                    // change the appearance on load
                    console.log("parsedStoredLocal : ", parsedStoredLocal);

                    if (parsedStoredLocal == false) return


                }
            } catch (error) {
                console.error('Error loading theme:', error);
            }
        };


        loadLocal();


    }, []);

    useEffect(() => {
        const saveLocal = async () => {
            try {
                await AsyncStorage.setItem('theme', JSON.stringify(isDarkMode));
            } catch (error) {
                console.error('Error saving theme:', error);
            }
        };

        saveLocal();
    }, [isDarkMode]);

    const themeContextValue: LocalContextProps = {
        isDarkMode,
        toggleLocal,
    };

    return (
        <LocalContext.Provider value={themeContextValue}>
            {children}
        </LocalContext.Provider>
    );
};

const useLocal = (): LocalContextProps => {
    const context = useContext(LocalContext);
    if (!context) {
        throw new Error('useLocal must be used within a LocalProvider');
    }
    return context;
};

export { CustomLocalProvider, useLocal };
