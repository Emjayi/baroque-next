import React from 'react'
import Stairs from '../../components/layout/Stairs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const index = () => {
    return (
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
                    animate={{ opacity: 1, color: "gray" }}
                    exit={{ opacity: 0, color: "white" }}
                    transition={{ duration: 1 }}
                    className='w-96 text-white text-6xl flex flex-col items-center justify-center'>
                    <Link href="/construction" className='z-50'>go to construction</Link>
                </motion.div>
            </motion.div >
        </div>
    )
}

export default index
