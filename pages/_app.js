import "./input.css"
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Head from 'next/head';
import Script from 'next/script'
import AnimatedCursor from "react-animated-cursor"
import { LanguageProvider } from '../components/layout/LanguageContext';


export default function App({ Component, pageProps, router }) {

    return (

        <React.StrictMode>
            <LanguageProvider>
                <AnimatePresence mode='wait' >
                    <Head>
                        <title>Baroque</title>
                        <meta name="description" content="Modern Thinking, Quality Building." />
                        <meta name="keywords" content="Baroque, architecture, design, team and vision." />
                        <meta property="og:title" content="Baroque" />
                        <meta property="og:description" content="Discover the team and vision that drive Baroque." />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://baroquegp.com/" />
                        <meta property="og:image" content="https://baroque.com/images/about-og-image.jpg" />
                        <meta name="robots" content="index, follow" />
                        <link rel="canonical" href="https://baroquegp.com/" />
                    </Head>

                    {/* This needs some changes. Like the postal code and other stuff. */}
                    <Script id="seo-scripts">
                        {
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Baroque",
                                "url": "https://baroquegp.com",
                                "logo": "https://baroquegp.com/logo.png",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+98-911-393-6140",
                                    "contactType": "Customer Service"
                                },
                                "sameAs": [
                                    "https://www.instagram.com/baroquecgp",
                                ],
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Armitaj Tower, Mashhad",
                                    "addressLocality": "Khorasan Razavi",
                                    "postalCode": "4681863366",
                                    "addressCountry": "IR"
                                }
                            }
                        }
                    </Script>
                    < Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </LanguageProvider>
            {/* {
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
                    } />)} */}
        </React.StrictMode>
    )
}