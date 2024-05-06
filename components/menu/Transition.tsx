import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Transition = (open, intro) => {
    // // State to track if the menu is open or closed
    // const [open, setOpen] = useState(false);
    // // Function to toggle the menu
    // const toggleMenu = () => {
    //     setOpen(!open);
    // };
    // // Check Intro
    // const [intro, setIntro] = useState(true);
    // setTimeout(() => {
    //     setIntro(false)
    // }, 3400);
    // Check if the client is Mobile or not
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the threshold as per your requirements
        };
        // Initial check
        handleResize();
        // Event listener for window resize
        window.addEventListener('resize', handleResize);
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <motion.div className={!intro ? 'fixed z-0 flex left-0 right-0 justify-center items-center' : 'fixed z-0 flex left-0 right-0 justify-center items-center'}>
            <motion.svg
                initial={{ scale: 1, opacity: 1 }}
                animate={!isMobile ? (!intro ? (open ? { scale: [10, 1, 1, 1], opacity: [.02, .02, 1, 1, 1, 1], y: ["0vh", "0vh", "0vh", "-20vh", "-20vh", "-20vh"], x: [0, 0, 0, 0, 0, -100] } : { scale: [1, 1, 10, 10], opacity: [1, 1, 1, .02, .02, .02], x: 0, y: 0 }) : (open ? { scale: [10, 1, 1, 1], opacity: [.02, .02, 1, 1, 1, 1], y: [0, 0, 0, -200, -200, -200], x: [0, 0, 0, 0, 0, 0] } : { scale: [1, 1, 1, 10], opacity: [1, 1, 1, 1, 1, 1], x: [0, 0, 0, 0, 0, 0], y: [0, 0, 0, 0, 0, 0] })) : (!intro ? (open ? { scale: [10, 1, 1, 1], opacity: [.02, .02, 1, 1, 1, 1], y: ["0vh", "0vh", "0vh", "-20vh", "-20vh", "-20vh"], x: [0, 0, 0, 0, 0, -100] } : { scale: [1, 1, 10, 10], opacity: [1, 1, 1, .02, .02, .02], x: 0, y: 0 }) : (open ? { scale: [10, 1, 1, .5], opacity: [.02, .02, 1, 1, 1, 1], y: [0, 0, 0, -200, -200, -200], x: [0, 0, 0, 0, 0, 0] } : { scale: [1, 1, 1, 10], opacity: [1, 1, 1, 1, 1, 1], x: [0, 0, 0, 0, 0, 0], y: [0, 0, 0, 0, 0, 0] }))}
                exit={!intro ? (open ? { scale: [1, 1, 1, 1, 1, 1], opacity: [1, 1, .2, 1, .5, 1], x: [-100, -100, 0, 0, 0, 0], y: ["-20vh", "-20vh", "-20vh", "-20vh", "0vh", "0vh"] } : { scale: 1, opacity: [.02, .02, .02, .02, .02, 1] }) : { scale: 1, opacity: [.02, .02, .02, .02, .02, 1] }}
                transition={!intro ? { duration: 2.4, times: [0, .2, .4, .6, .8, 1], ease: "easeInOut" } : { duration: .8, times: [0, .2, .4, .6, .8, 1], ease: "easeInOut", delay: 3 }}
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
                        exit={!intro ? (open ? { scale: [1, .9, 1, 1, 1, .5], opacity: [1, .4, 1, .3, .6, 0] } : { scale: [10, 10, 1, 1], opacity: [0, 0, 0, 0] }) : { scale: [10, 10, 1, 1], opacity: [0, 0, 0, 0] }}
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

export default Transition
