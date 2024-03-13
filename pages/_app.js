import "./input.css"
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'



export default function App({ Component, pageProps, router }) {

    return (
        <AnimatePresence mode='wait'>
            <Component {...pageProps} key={router.route} />
        </AnimatePresence>
    )
}