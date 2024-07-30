import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, delay } from 'framer-motion';
import Menu from '../components/layout/menu';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import AnimatedText from '../components/layout/AnimatedText';
import TextLoop from '../components/layout/TextLoop';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { aboutTitlesDou } from "../lib/data"
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
    title: 'Baroque',
    description: 'CGP',
}

// App component with animations
const App = () => {

    const links = [
        { key: 1, name: 'Team', url: '/team', speed: 0.1, length: -50 },
        { key: 2, name: 'Construction', url: '/construction', speed: 0.2, length: -10 },
        { key: 3, name: 'Projects', url: '/projects', speed: 0.1, length: +50 },
        { key: 4, name: 'About', url: '/about', speed: 0.2, length: -50 }
    ];

    // Menu shits
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    };
    const [intro, setIntro] = useState(true);
    setTimeout(() => {
        setIntro(false)
    }, 3400);

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

    // Render the App component
    return (
        <div className='flex flex-col justify-center h-[100dvh] md:h-screen'>
            {/* Intro animation */}
            <PageTransition intro={intro} open={open} />

            {!intro && <><div className='overflow-hidden flex flex-col h-[100dvh] md:h-screen items-center gap-5 text-white text-6xl'>



                {/* Menu animation */}
                {open && (

                    <Menu isOpen={open} intro={intro} setIsOpen={setOpen} />

                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <AnimatePresence>
                        {!open && !intro && (<>
                            {/* Enter button */}
                            <motion.div
                                className='flex flex-col w-screen items-center justify-center gap-5 px-8 text-white text-6xl'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { delay: 0.2 } }}
                                transition={{ duration: .8, ease: "easeIn", delay: 1 }}>

                                <motion.div
                                    className='grid grid-rows-2 lg:-ml-12 absolute top-72 gap-2 text-2xl md:text-3xl text-white justify-center items-center'>
                                    <motion.div className='grid -ml-36 grid-cols-2 gap-2'>
                                        <TextLoop className='text-zinc-400 flex justify-end w-full' titles={aboutTitlesDou.first} />
                                        <motion.h1
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: .2, delay: 1 }}
                                            className='flex justify-start w-full'>
                                            <AnimatedText delay={1} duration={1} text=" Thinking," className='' />
                                        </motion.h1>
                                    </motion.div>
                                    <motion.div className='grid pl-36 grid-cols-2 gap-2'>
                                        <TextLoop className=' text-zinc-400 flex justify-end w-full' titles={aboutTitlesDou.second} />
                                        <motion.h1
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: .2, delay: 1 }}
                                            className='flex justify-start w-full'>
                                            <AnimatedText delay={1} duration={1} text=" Building." className='' />
                                        </motion.h1>
                                    </motion.div>
                                </motion.div>


                                <motion.button
                                    onClick={toggleMenu}
                                    className='text-white flex md:tracking-widest md:hover:tracking-normal justify-center items-end text-center h-[60dvh] w-[50vw] text-2xl md:duration-200 absolute bottom-36'
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ y: 40, opacity: 0, transition: { duration: 1.1, delay: 0 } }}
                                    transition={{ duration: 1, delay: .2 }}

                                >
                                    <h1 className=''>Enter</h1>
                                </motion.button>
                                <motion.div
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    exit={{ y: 100, transition: { delay: 0, duration: .9 } }}
                                    transition={{ duration: 1, type: "spring", stiffness: 25, damping: 10, delay: 1 }}
                                    className='fixed text-[12px] text-sm bottom-5 lg:px-16 flex items-stretch gap-12 text-white font-bold w-full z-20'>
                                    <div className='hidden lg:flex gap-1'>
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
                                    <motion.div className='w-full hidden md:block lg:static absolute bottom-2 left-0 text-center lg:flex gap-2 justify-end'>
                                        <p>Made with <span className='text-primary'>❤</span> at <a href='https://khatoonadvertising.ir/' className='text-zinc-400 hover:text-primary duration-300'>Khatoon Advertising</a></p>
                                        {/* <p>by <a href='https://emjayi.liara.run/' className='text-zinc-400 hover:text-primary duration-300'>Emjayi</a></p> */}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </>)}
                    </AnimatePresence>
                </motion.div>
            </div ></>}
        </div >
    );
};

export default App;