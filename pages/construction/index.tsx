import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import Spline from '@splinetool/react-spline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/2.svg'
import logo2 from '../../public/3.svg'
const index = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{}}
                className='flex justify-center items-center h-screen w-screen text-white'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Image src={logo} className=' fixed top-0 -right-16' alt='logo'></Image>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}

                    transition={{ duration: 2, delay: 2 }}
                >
                    <Image src={logo2} className=' fixed top-0 -right-16' alt='logo'></Image>
                </motion.div>

                <h1 className='absolute bottom-10 text-white text-sm'>Loading...</h1>
            </motion.div>
        </AnimatePresence>
    )
}

export default index