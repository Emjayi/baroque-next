import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import Spline from '@splinetool/react-spline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/2.svg'
import logo2 from '../../public/3.svg'
import { BoxesCore } from '../../components/ui/background-boxes';
import Head from 'next/head'
import Link from 'next/dist/client/link';
const index = () => {
    return (
        // <div className="relative w-full h-screen overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        //     <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        //     <BoxesCore />
        //     <h1 className="md:text-4xl text-xl text-white relative z-20">
        //         Tailwind is Awesome
        //     </h1>
        //     <p className="text-center mt-2 text-neutral-300 relative z-20">
        //         Framer motion is the best animation library ngl
        //     </p>
        // </div>

        <div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 1 }}
                className='w-full h-screen flex items-center justify-center'
            >
                <motion.div
                    initial={{ opacity: 0, color: "white" }}
                    animate={{ opacity: 1, color: "red" }}
                    exit={{ opacity: 0, color: "white" }}
                    transition={{ duration: 1 }}
                    className='w-96 text-white text-6xl flex flex-col items-center justify-center'>
                    <Link href="/test" className='z-50'>go to test</Link>
                </motion.div>
            </motion.div >
        </div>

    )
}

export default index