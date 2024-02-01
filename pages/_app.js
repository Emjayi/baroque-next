import "./input.css"
import { AnimatePresence } from 'framer-motion'
import Link from "next/link"

export default function App({ Component, pageProps, router }) {
    return (
        <div className='main bg-slate-900 min-h-screen'>
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
    )
}