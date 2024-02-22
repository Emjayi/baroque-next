import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from '../components/menu';
import Link from 'next/link';
import Image from 'next/image';
import intro1 from '/public/intro/1.svg'
import intro2 from '/public/intro/2.svg'
import intro3 from '/public/intro/3.svg'
import logo from '/public/logo.png'
import { UilMultiply } from '@iconscout/react-unicons'

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
        { key: 5, name: 'Press', url: '/press', speed: 0.1, length: +50 }
    ];

    // Function to toggle the menu
    const toggleMenu = () => {
        setOpen(!open);
    };

    // Render the App component
    return (
        <>
            {/* Intro animation */}
            <AnimatePresence>
                {intro && <motion.div exit={{ opacity: 0 }} className='grid grid-cols-3 grid-rows-3 gap-0 place-items-center h-screen'>
                    <AnimatePresence>
                        {intro && (<><motion.div exit={{ opacity: 0 }} className='grid grid-cols-3 grid-rows-3 row-start-2 col-start-2'>
                            <motion.div
                                animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }}
                                transition={{ times: [0, .2, .6], duration: 1, repeat: Infinity, repeatDelay: .1 }}
                                className='col-start-1 bg-primary w-[50px] h-[50px]'></motion.div>
                            <motion.div animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }} transition={{ times: [0, .4, .8], duration: 1, repeat: Infinity, repeatDelay: .1 }} className='col-start-3 bg-primary w-[50px] h-[50px]'></motion.div>
                            <motion.div initial={{ y: 0 }} animate={{ y: [-50, 50, 0, 0, 0, -50], x: [0, 0, 0, 50, -50, 0, 0] }} transition={{ times: [0, .5, 1], duration: 2, repeat: Infinity, repeatDelay: 1 }} className='col-start-2 row-start-2 bg-primary w-[25px] h-full'></motion.div>
                            <motion.div initial={{ y: 0 }} animate={{ y: [50, -50, 0, 0, 0, 50], x: [0, 0, 0, -50, 50, 0, 0] }} transition={{ times: [0, .5, 1], duration: 2, repeat: Infinity, repeatDelay: 1 }} className='col-start-2 row-start-2 bg-primary ml-[25px] w-[25px] h-full'></motion.div>
                            <motion.div animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }} transition={{ times: [0, .3, .6], duration: 1, repeat: Infinity, repeatDelay: .1 }} className='col-start-1 row-start-3 bg-primary w-full h-full'></motion.div>
                            <motion.div animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }} transition={{ times: [0, .3, .7], duration: 1, repeat: Infinity, repeatDelay: .1 }} className='col-start-3 row-start-3 bg-primary w-full h-full'></motion.div>
                        </motion.div>
                            <div className='row-start-3 col-start-2'><h1 className=' text-zinc-300 text-lg'>Loading...</h1></div></>)}
                    </AnimatePresence>
                    <AnimatePresence>
                        {!intro && <motion.div
                            className='row-start-2 col-start-2 h-screen w-screen'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >

                        </motion.div>}
                    </AnimatePresence>
                </motion.div>}
            </AnimatePresence>
            {!intro && <><div className='bg'></div><div className=' overflow-hidden flex flex-col h-screen items-center gap-5 px-8 text-white text-6xl relative'>

                <AnimatePresence>
                    {!open && <motion.div
                        className='text-primary text-6xl mt-16'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <h1>Baroque</h1>
                    </motion.div>}
                </AnimatePresence>

                {/* Overlay animation for the background */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            className="fixed top-0 left-0 bg w-full h-full z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }} />
                    )}
                </AnimatePresence>

                {/* Menu animation */}
                <AnimatePresence>
                    {open && (
                        <><motion.div
                            className="fixed top-0 left-0 w-full bg- h-full z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: 1500 }}
                            transition={{ duration: 1, stiffness: 90, damping: 15, ease: "easeIn", delay: .8 }}
                        >
                            {/* Menu component */}
                            <Menu isOpen={open} />

                            {/* Exit button */}
                            <motion.button
                                onClick={toggleMenu}
                                className='text-white text-xl absolute top-10 right-10'
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: .9 }}
                            >
                                <UilMultiply />
                            </motion.button>
                        </motion.div></>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {!open && !intro && (<>
                        {/* Enter button */}
                        <motion.div
                            className='flex flex-col items-center justify-center gap-5 px-8 text-white text-6xl'
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeIn" }}>
                            <motion.button
                                onClick={toggleMenu}
                                className='text-white flex tracking-widest hover:tracking-normal justify-center items-end text-center h-96 w-64 text-2xl duration-200 absolute bottom-24'
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}

                            >
                                <h1 className=''>Enter</h1>
                            </motion.button>

                            <motion.div
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, type: "spring", stiffness: 25, damping: 10, delay: 1 }}
                                className='absolute text-sm bottom-5 px-24 grid justify-center items-center gap-12 text-white grid-cols-3 font-bold w-full'>
                                <div className='flex gap-1'>
                                    <h1>Navigation:</h1>
                                    <ul className='flex gap-2 justify-start'>
                                        {links.map((link) =>
                                        (
                                            <Link href={link.url} key={link.key}>
                                                <li className='text-zinc-400 hover:text-primary duration-300'>{link.name}</li>
                                            </Link>
                                        )
                                        )}
                                    </ul>
                                </div>
                                <div className='flex gap-4 justify-center'>

                                </div>
                                <div className='flex gap-4 justify-end'>
                                    <p>Made with 🤍 In <a href='https://khatoonadvertising.ir/' className='text-zinc-400 hover:text-primary duration-300'>Khatoon Advertising</a> By <a href='https://emjayi.ir/' className='text-zinc-400 hover:text-primary duration-300'>Emjayi</a></p>
                                </div>

                            </motion.div>
                        </motion.div></>)}
                </AnimatePresence>
            </div ></>}</>
    );
};

export default App;