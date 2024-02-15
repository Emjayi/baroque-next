import React, { useEffect, useRef, useState } from 'react';
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
        { name: 'Team', url: '/team', speed: 0.1, length: -50 },
        { name: 'Construction', url: '/construction', speed: 0.2, length: -10 },
        { name: 'Projects', url: '/projects', speed: 0.1, length: +50 },
        { name: 'About us', url: '/about', speed: 0.2, length: -50 },
        { name: 'Press', url: '/press', speed: 0.1, length: +50 }
    ];

    // Function to toggle the menu
    const toggleMenu = () => {
        setOpen(!open);
    };

    // Render the App component
    return (
        <><div className='bg'></div><div className=' overflow-hidden flex flex-col h-screen items-center justify-center gap-5 px-8 text-white text-6xl relative'>

            <motion.div
                initial={{ x: 300, opacity: .6 }}
                animate={{ x: -300, y: -100, opacity: .2 }}
                transition={{ duration: 60 }}
                className='home-svg'>
                <Image src={intro1} alt="intro" />
            </motion.div>

            <AnimatePresence>
                {!open && <motion.div
                    className='text-white text-6xl font-bold absolute top-auto w-[8em]'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ scale: 40, opacity: 0, x: -4200, y: 1000 }}
                    transition={{ duration: 3, delay: .2 }}
                    style={{
                        x: (mousePosition.x / 80) - 50,
                        y: (mousePosition.y / 80) - 40
                    }}>
                    <Image src={logo} alt='Logo Baroque' />
                </motion.div>}
            </AnimatePresence>

            {/* Overlay animation for the background */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed top-0 left-0 bg w-full h-full z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }} />
                )}
            </AnimatePresence>

            {/* Menu animation */}
            <AnimatePresence>
                {open && (
                    <><motion.div
                        className="fixed top-0 left-0 w-full bg-[#D2AC72] h-full z-50"
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
                {!open && (<>
                    {/* Enter button */}
                    <motion.div
                        className='flex flex-col items-center justify-center gap-5 px-8 text-white text-6xl'
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeIn" }}>
                        <motion.button
                            onClick={toggleMenu}
                            className='text-white text-5xl tracking-wider hover:tracking-normal duration-200 absolute bottom-24'
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}

                        >
                            Enter
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
                                        <Link href={link.url}>
                                            <li className='text-zinc-400 hover:text-yellow-500 duration-300'>{link.name}</li>
                                        </Link>
                                    )
                                    )}
                                </ul>
                            </div>
                            <div className='flex gap-4 justify-center'>

                            </div>
                            <div className='flex gap-4 justify-end'>
                                <p>Made with 🤍 In <a href='https://khatoonadvertising.ir/' className='text-zinc-400 hover:text-yellow-500 duration-300'>Khatoon Advertising</a> By <a href='https://emjayi.ir/' className='text-zinc-400 hover:text-yellow-500 duration-300'>Emjayi</a></p>
                            </div>

                        </motion.div>
                    </motion.div></>)}
            </AnimatePresence>
        </div ></>
    );
};

export default App;