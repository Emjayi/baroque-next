import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Intro = ({ isIntro }: { isIntro: boolean }) => {
    return (
        <>
            {isIntro &&
                (<>
                    <AnimatePresence>
                        <div className='w-screen h-[90vh]  md:h-screen fixed top-0 left-0 flex items-center justify-center'>
                            <motion.svg
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: 0, opacity: .8 }}
                                transition={{ duration: 1.8, repeat: 1, repeatDelay: .4, repeatType: "reverse" }}
                                version="1.1" id="Layer_1" className='fixed w-[600px] h-[600px]'
                                viewBox="0 0 5463.4 3168.8">
                                <g>
                                    <motion.path
                                        initial={{ pathLength: 0, pathOffset: 0, pathSpacing: 0 }}
                                        animate={{ pathLength: 1, pathOffset: 0, pathSpacing: 2 }}
                                        transition={{ duration: 2, times: [0, .3, .8, 1], ease: "easeInOut", repeat: Infinity }}
                                        strokeWidth={30}
                                        stroke='#D2AC72'
                                        fill="transparent"
                                        className="" d="M3053.6,1262.3V719.5h-614.2l-301.3,301.3v1428.5h885.7l301.3-301.3v-885.7L3053.6,1262.3L3053.6,1262.3z
		 M3223.8,2106l-241.9,241.9h-742.4V1062.6l241.9-241.9h471v542.8h271.4L3223.8,2106L3223.8,2106z"/>
                                    <motion.path
                                        initial={{ scale: .8, opacity: .5, strokeDasharray: 20, pathLength: 0, pathOffset: 0, pathSpacing: 0 }}
                                        animate={{ scale: 1, opacity: 1, strokeDasharray: 1, pathLength: .5, pathOffset: .6, pathSpacing: .7 }}
                                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                                        fill='#D2AC72'
                                        strokeWidth={10}
                                        className="" d="M2782.2,1092.2V990.9h-372.7v1186.9h644.1v-644.1h-271.4V1092.2 M2952.4,2076.5h-441.5v-984.3H2681V1635h271.4
		L2952.4,2076.5L2952.4,2076.5z" />
                                </g>
                            </motion.svg>
                            <motion.div
                                initial={{ y: 220, opacity: 0 }}
                                animate={{ y: 180, opacity: 1 }}
                                transition={{
                                    duration: .5, repeat: 1,
                                    repeatDelay: .8, repeatType: "reverse"
                                }}
                                className='row-start-3 col-start-2'><h1 className=' text-zinc-300 text-lg'>Loading...</h1>
                            </motion.div>
                        </div>
                    </AnimatePresence>
                </>)
            }
        </>
    )
}

export default Intro
