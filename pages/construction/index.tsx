import React, { useState } from 'react'
import PageWrapper from '../../components/PageWrapper'
import Spline from '@splinetool/react-spline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/2.svg'
import logo2 from '../../public/3.svg'
import { BoxesCore } from '../../components/ui/background-boxes';
import Head from 'next/head'
import Link from 'next/dist/client/link';
import test from '/public/test.svg'
const index = () => {
    const [hovered, setHovered] = useState(false)
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
        <div className='flex justify-start items-center h-screen w-screen'>
            {/* <motion.h1 className='absolute'>Menu</motion.h1>
            <motion.div className='w-8 h-8 mt-32 ml-32' whileHover={{ scaleX: 2.5 }}>
                <Image src={test} alt={"team Picture"} className='width-full object-fill scale-105' />
            </motion.div> */}
            <div className='humb flex flex-col items-center justify-center h-[50px] w-[50px] bg-primary hover:w-[100px] cursor-pointer duration-300'>
                <h1>Hello</h1>
            </div>
        </div >


    )
}

export default index