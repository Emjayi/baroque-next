import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for language context
type LanguageContextType = {
    lang: string;
    changeLanguage: (newLang: string) => void;
};

// Create a context for language
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Custom hook to access language context
export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Language Provider component
type LanguageProviderProps = {
    children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [lang, setLang] = useState<string>('en');

    const changeLanguage = (newLang: string) => {
        setLang(newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
