import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

// Intro component with animation
const Intro = ({ isIntro }: { isIntro: boolean }) => {
    return (
        <>
            {/* Render intro animation only if 'isIntro' is true */}
            {isIntro && (
                <>
                    {/* AnimatePresence component to handle entering and exiting animations */}
                    <AnimatePresence>
                        <div className='w-screen h-[100dvh]  md:h-screen fixed top-0 left-0 flex items-center justify-center'>
                            {/* Motion SVG element */}
                            <motion.svg
                                // Initial animation setup
                                initial={{ y: 0, opacity: 0 }}
                                // Animation when element is present
                                animate={{ y: 0, opacity: .8 }}
                                // Animation transition settings
                                transition={{ duration: 1.8, repeat: 1, repeatDelay: .4, repeatType: "reverse" }}
                                version="1.1" id="Layer_1" className='fixed w-[600px] h-[600px]'
                                viewBox="0 0 5463.4 3168.8">
                                <g>
                                    {/* Motion path element */}
                                    <motion.path
                                        // Initial animation setup
                                        initial={{ pathLength: 0, pathOffset: 0, pathSpacing: 0 }}
                                        // Animation when element is present
                                        animate={{ pathLength: 1, pathOffset: 0, pathSpacing: 2 }}
                                        // Animation transition settings
                                        transition={{ duration: 2, times: [0, .3, .8, 1], ease: "easeInOut", repeat: Infinity }}
                                        strokeWidth={30}
                                        stroke='#D2AC72'
                                        fill="transparent"
                                        className=""
                                        // SVG path data
                                        d="M3053.6,1262.3V719.5h-614.2l-301.3,301.3v1428.5h885.7l301.3-301.3v-885.7L3053.6,1262.3L3053.6,1262.3z
		 M3223.8,2106l-241.9,241.9h-742.4V1062.6l241.9-241.9h471v542.8h271.4L3223.8,2106L3223.8,2106z"/>
                                    {/* Motion path element */}
                                    <motion.path
                                        // Initial animation setup
                                        initial={{ scale: .8, opacity: .02, strokeDasharray: 20, pathLength: 0, pathOffset: 0, pathSpacing: 0 }}
                                        // Animation when element is present
                                        animate={{ scale: 1, opacity: 1, strokeDasharray: 1, pathLength: .5, pathOffset: .6, pathSpacing: .7 }}
                                        // Animation transition settings
                                        transition={{ duration: .9, repeat: Infinity, repeatType: "reverse" }}
                                        fill='#D2AC72'
                                        strokeWidth={10}
                                        className=""
                                        // SVG path data
                                        d="M2782.2,1092.2V990.9h-372.7v1186.9h644.1v-644.1h-271.4V1092.2 M2952.4,2076.5h-441.5v-984.3H2681V1635h271.4
		L2952.4,2076.5L2952.4,2076.5z" />
                                </g>
                            </motion.svg>
                            {/* Text element */}
                            <motion.div
                                // Initial animation setup
                                // initial={{ y: [180, 220, 220, 220, 220, 180], opacity: [0, 1, 1, 1, 1, 0] }}
                                // Animation when element is present
                                animate={{ y: [220, 180, 180, 180, 180, 180, 180, 220], opacity: [0, 1, 1, 1, 1, 0] }}
                                // Animation transition settings
                                transition={{
                                    duration: 3, times: [0, .25, .5, .75, 1, 1.25, 1.5], repeat: 1,
                                    repeatDelay: .8, repeatType: "reverse"
                                }}
                                className='row-start-3 col-start-2'>
                                <h1 className='text-lg uppercase text-zinc-400'>Loading...</h1>
                            </motion.div>
                        </div>
                    </AnimatePresence>
                </>
            )}
        </>
    );
};

export default Intro;
