import "./input.css"
import { AnimatePresence, motion } from 'framer-motion'
import Link from "next/link"
import { useState } from "react"


export default function App({ Component, pageProps, router }) {


    return (
        <div className=''>
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
    )
}