import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const LangChanger: React.FC = () => {
    const { lang, changeLanguage } = useLanguage();

    const handleLangChange = (newLang: string) => {
        changeLanguage(newLang);
    };

    return (
        <>
            {/*Desktop*/}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 160 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className='hidden lg:flex justify-center items-center'>
                <motion.button
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1, duration: .3 }}
                    className='text-white hover:bg-primary/40 py-2 px-4'
                    onClick={() => handleLangChange('en')}
                >
                    En
                </motion.button>
                <motion.button
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: .3 }}
                    className='text-white hover:bg-primary/40 py-2 px-4'
                    onClick={() => handleLangChange('fa')}
                >
                    Fa
                </motion.button>
                <motion.button
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3, duration: .3 }}
                    className='text-white hover:bg-primary/40 py-2 px-4'
                    onClick={() => handleLangChange('ar')}
                >
                    Ar
                </motion.button>
            </motion.div>

            {/*Mobile*/}
            <div
                className='flex lg:hidden justify-center items-center'>
                <button
                    className='text-white hover:bg-primary/40 py-2 px-4'
                    onClick={() => handleLangChange('en')}
                >
                    En
                </button>
                <button
                    className='text-white hover:bg-primary/40 py-2 px-4'
                    onClick={() => handleLangChange('fa')}
                >
                    Fa
                </button>
                <button
                    className='text-white hover:bg-primary/40 py-2 px-4'
                    onClick={() => handleLangChange('ar')}
                >
                    Ar
                </button>
            </div>
        </>
    );
};

export default LangChanger;
