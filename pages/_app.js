import "./input.css"
import { AnimatePresence } from 'framer-motion'
import Link from "next/link"

export default function App({ Component, pageProps, router }) {
    return (
        <div className=''>
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
    )
}