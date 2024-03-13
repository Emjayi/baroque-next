import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const [intro, setIntro] = useState(true);
useEffect(() => {
    const timer = setTimeout(() => {
        setIntro(false)
    }, 3400);
    return () => clearTimeout(timer);
}, []);

const Logo = () => {
    return (
        <motion.div className={!intro ? 'fixed z-0 flex left-0 right-0 justify-center items-center opacity-45 md:opacity-100' : 'fixed z-0 flex left-0 right-0 justify-center items-center opacity-55 md:opacity-100'}>
            <motion.svg
                initial={{ scale: 1, opacity: 1 }}
                animate={open ? { scale: [10, 8, 6, 4, 2, 1], opacity: [.02, .02, .02, .02, .02, 1] } : { scale: [1, 2, 4, 6, 8, 10], opacity: [1, .02, .02, .02, .02, .02] }}
                exit={!intro ? (open ? { scale: [1, 1, 1, 1, 1, 1], opacity: [1, 1, .2, 1, .5, 1] } : { scale: [10, 8, 6, 4, 2, 1], opacity: [.02, .02, .02, .02, .02, 1] }) : { scale: [10, 8, 6, 4, 2, 1], opacity: [.02, .02, .02, .02, .02, 1] }}
                transition={!intro ? { duration: 1.4, times: [0, .2, .4, .6, .8, 1], ease: "easeInOut" } : { duration: 1.4, times: [0, .2, .4, .6, .8, 1], ease: "easeInOut", delay: 3 }}
                version="1.1" id="Layer_1" className='fixed w-[600px] h-[600px]'
                viewBox="0 0 5463.4 3168.8">
                <g>
                    <motion.path
                        fill="#D2AC72"
                        className="" d="M3053.6,1262.3V719.5h-614.2l-301.3,301.3v1428.5h885.7l301.3-301.3v-885.7L3053.6,1262.3L3053.6,1262.3z
M3223.8,2106l-241.9,241.9h-742.4V1062.6l241.9-241.9h471v542.8h271.4L3223.8,2106L3223.8,2106z"/>
                    <motion.path
                        initial={{ scale: 1, opacity: 0 }}
                        animate={open ? { scale: [1, 1, 1, 1], opacity: [.02, .05, 1, 1] } : { scale: [1, 1, 1, 1], opacity: [0, 0, 0, .02] }}
                        exit={!intro ? (open ? { scale: [1, .9, 1, 1, 1, .5], opacity: [1, .4, 1, .3, .6, 0] } : { scale: [10, 10, 1, 1], opacity: [0, 0, 0, .02] }) : { scale: [10, 10, 1, 1], opacity: [0, 0, 0, .02] }}
                        transition={{ duration: 1.6, times: [0, .5, .8, 1], ease: "easeInOut" }}
                        fill='#D2AC72'
                        strokeWidth={10}
                        className="" d="M2782.2,1092.2V990.9h-372.7v1186.9h644.1v-644.1h-271.4V1092.2 M2952.4,2076.5h-441.5v-984.3H2681V1635h271.4
L2952.4,2076.5L2952.4,2076.5z" />
                </g>
            </motion.svg>
        </motion.div>
    )
}

export default Logo