import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from '../components/menu';
import { UilMultiply } from '@iconscout/react-unicons'
import Footer from '../components/footer';
import Intro from '../components/layout/Intro';

// App component with animations
const App = () => {
    // State to track if the menu is open or closed
    const [open, setOpen] = useState(false);
    const [intro, setIntro] = useState(true);
    setTimeout(() => {
        setIntro(false)
    }, 3400);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = (e: any) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", updateMousePosition)
        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
        }
    })
    // List of menu links
    const links = [
        { key: 1, name: 'Team', url: '/team', speed: 0.1, length: -50 },
        { key: 2, name: 'Construction', url: '/construction', speed: 0.2, length: -10 },
        { key: 3, name: 'Projects', url: '/projects', speed: 0.1, length: +50 },
        { key: 4, name: 'About', url: '/about', speed: 0.2, length: -50 },
    ];

    // Function to toggle the menu
    const toggleMenu = () => {
        setOpen(!open);
    };

    // Render the App component
    return (
        <div className='flex flex-col justify-center h-[90vh] md:h-screen'>
            {/* Intro animation */}
            <motion.div className='fixed opacity-45 md:opacity-100 z-0 flex md:h-screen h-[calc(100vh - constant(safe-area-inset-top))] w-screen justify-center items-center left-auto top-auto'>
                <motion.svg
                    initial={{ scale: 1, opacity: 1 }}
                    animate={open ? { scale: 1, opacity: [.02, .02, .02, .02, .02, 1] } : { scale: 10, opacity: [1, .02, .02, .02, .02, .02] }}
                    exit={!intro ? (open ? { scale: [1, 1, 1, 1, 1, 1], opacity: [1, 1, .2, 1, .5, 1] } : { scale: 1, opacity: [.02, .02, .02, .02, .02, 1] }) : { scale: 1, opacity: [.02, .02, .02, .02, .02, 1] }}
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

            {intro && <motion.div exit={{ opacity: 0 }} className='grid grid-cols-3 grid-rows-3 gap-0 place-items-center md:h-screen h-full'>
                <div className='bg hidden md:block'></div><Intro isIntro={intro} />
            </motion.div>}

            {!intro && <><div className='bg hidden md:block'></div><div className='overflow-hidden flex flex-col h-[90vh] md:h-screen items-center gap-5 text-white text-6xl'>



                {/* Menu animation */}
                {open && (
                    <motion.div
                        className="top-0 w-full h-full z-50 "
                    >
                        {/* Menu component */}
                        <Menu isOpen={open} />

                    </motion.div>
                )}

                <div>
                    <AnimatePresence>
                        {!open && !intro && (<>
                            {/* Enter button */}
                            <motion.div
                                className='flex flex-col w-screen items-center justify-center gap-5 px-8 text-white text-6xl'
                                exit={{ opacity: 0 }}
                                transition={{ duration: .2, ease: "easeIn", delay: 1 }}>
                                <motion.button
                                    onClick={toggleMenu}
                                    className='text-white flex tracking-widest hover:tracking-normal justify-center items-end text-center h-96 w-64 text-2xl duration-200 absolute bottom-24'
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ y: 40 }}
                                    transition={{ duration: 1, delay: .2 }}

                                >
                                    <h1 className=''>Enter</h1>
                                </motion.button>
                                <Footer />
                            </motion.div>
                        </>)}
                    </AnimatePresence>
                </div>
            </div ></>}
        </div>
    );
};

export default App;