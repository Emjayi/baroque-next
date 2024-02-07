import React from 'react'
import { motion } from 'framer-motion'

const Inner = ({ children }: { children: any }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,

            }}
            exit={{ opacity: 0, y: "0%" }}
            className='table'
        >
            {children}
        </motion.div>
    )
}

export default Inner