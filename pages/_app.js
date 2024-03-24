import "./input.css"
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Head from 'next/head';
import Script from 'next/script'


export default function App({ Component, pageProps, router }) {

    return (
        <AnimatePresence mode='wait'>
            <Head>
                <title>Baroque</title>
            </Head>
            <Script src="https://polyfill.io/v3/polyfill.min.js?features=default" />
            <Component {...pageProps} key={router.route} />
        </AnimatePresence>
    )
}

// Load Google Maps API script
if (typeof window !== 'undefined') {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
}