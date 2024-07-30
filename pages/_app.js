import "./input.css"
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Head from 'next/head';
import Script from 'next/script'
import AnimatedCursor from "react-animated-cursor"
import { LanguageProvider } from '../components/layout/LanguageContext';


export default function App({ Component, pageProps, router }) {
    // Check if the client is Mobile or not
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the threshold as per your requirements
        };
        // Initial check
        handleResize();
        // Event listener for window resize
        window.addEventListener('resize', handleResize);
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (

        <React.StrictMode>
            <LanguageProvider>
                <AnimatePresence mode='wait' >
                    <Head>
                        <title>Baroque</title>
                        <meta name="description" content="In the name of games" />
                        < meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1, user-scalable=no" />
                    </Head>
                    < Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </LanguageProvider>
            {
                !isMobile && (<AnimatedCursor
                    showSystemCursor={true}
                    innerSize={8}
                    outerSize={24}
                    innerScale={2}
                    outerScale={1.5}
                    outerAlpha={0}
                    hasBlendMode={true}
                    outerStyle={{
                        border: '3px solid #D2AC72',
                        borderRadius: "0%"
                    }
                    }
                    innerStyle={{
                        backgroundColor: '#D2AC7250',
                        borderRadius: "50%",
                        mixBlendMode: 'revert'
                    }
                    } />)}
        </React.StrictMode>
    )
}