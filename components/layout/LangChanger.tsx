import React from 'react';
import { useLanguage } from './LanguageContext';

const LangChanger: React.FC = () => {
    const { lang, changeLanguage } = useLanguage();

    const handleLangChange = (newLang: string) => {
        changeLanguage(newLang);
    };

    return (
        <div className='flex justify-center items-center'>
            <button
                className='text-white hover:bg-primary/40 py-2 px-4 focus:bg-primary duration-300'
                onClick={() => handleLangChange('en')}
            >
                En
            </button>
            <button
                className='text-white hover:bg-primary/40 py-2 px-4 focus:bg-primary duration-300'
                onClick={() => handleLangChange('fa')}
            >
                Fa
            </button>
            <button
                className='text-white hover:bg-primary/40 py-2 px-4 focus:bg-primary duration-300'
                onClick={() => handleLangChange('ar')}
            >
                Ar
            </button>
        </div>
    );
};

export default LangChanger;
