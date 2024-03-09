import "./input.css"
import { AnimatePresence, motion } from 'framer-motion'
import localFont from '@next/font/local'

export default function App({ Component, pageProps, router }) {
    return (
        <div>
            <AnimatePresence mode='wait'>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </div>
    )
}