import "./input.css"
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Head from 'next/head';
import Script from 'next/script'
import AnimatedCursor from "react-animated-cursor"


export default function App({ Component, pageProps, router }) {

    return (
        <>
            <AnimatedCursor
                showSystemCursor={false}
                innerSize={10}
                outerSize={35}
                innerScale={1.2}
                outerScale={1.4}
                outerAlpha={0}
                outerStyle={{
                    border: '3px solid #D2AC72'
                }}
                innerStyle={{
                    backgroundColor: '#D2AC7250'
                }} />
            <AnimatePresence mode='wait'>
                <Head>
                    <title>Baroque</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                </Head>

                <Script src="https://polyfill.io/v3/polyfill.min.js?features=default" />
                <Component {...pageProps} key={router.route} />

            </AnimatePresence>
        </>
    )
}

// Load Google Maps API script
if (typeof window !== 'undefined') {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
}