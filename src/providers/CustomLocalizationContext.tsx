// LocalContext.tsx

import React, { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface LocalContextProps {
    language: String;
    local: String;
    setLanguage: Dispatch<SetStateAction<string>>;
    setLocal: Dispatch<SetStateAction<string>>;
}

const LocalContext = createContext<LocalContextProps | undefined>(undefined);

interface LocalProviderProps {
    children: React.ReactNode;
}

const CustomLocalProvider: React.FC<LocalProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState('Portuguese');
    const [local, setLocal] = useState('AO');


    useEffect(() => {
        const loadLocalization = async () => {
            try {
                const storedLocal = await AsyncStorage.getItem('local');
                const storedLanguage = await AsyncStorage.getItem('language');
                if (storedLocal !== null) {
                    const parsedStoredLocal = JSON.parse(storedLocal);
                    setLocal(parsedStoredLocal);
                    console.log("parsedStoredLocal: ", parsedStoredLocal);
                }
                if (storedLanguage !== null) {
                    const parsedStoredLanguage = JSON.parse(storedLanguage);
                    setLocal(parsedStoredLanguage);
                    console.log("parsedStoredLanguage: ", parsedStoredLanguage);
                }
            } catch (error) {
                console.error('Error loading local and language:', error);
            }
        };



        loadLocalization();


    }, []);

    useEffect(() => {
        const saveLocal = async () => {
            try {
                await AsyncStorage.setItem('local', JSON.stringify(local));
            } catch (error) {
                console.error('Error saving local:', error);
            }
        };

        saveLocal();
    }, [local]);

    useEffect(() => {
        const saveLanguage = async () => {
            try {
                await AsyncStorage.setItem('language', JSON.stringify(language));
            } catch (error) {
                console.error('Error saving language:', error);
            }
        };

        saveLanguage();
    }, [language]);

    const localContextValue: LocalContextProps = {
        language,
        local,
        setLanguage,
        setLocal,

    };

    return (
        <LocalContext.Provider value={localContextValue}>
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
