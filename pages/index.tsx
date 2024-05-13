import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from '../components/layout/menu';
import { UilMultiply } from '@iconscout/react-unicons'
import Footer from '../components/layout/Footer';
import Intro from '../components/layout/Intro';
import Transition from '../components/layout/menu/Transition';
import PageTransition from '../components/layout/PageTransition';

// App component with animations
const App = () => {
    // State to track if the menu is open or closed
    const [open, setOpen] = useState(false);
    // Function to toggle the menu
    const toggleMenu = () => {
        setOpen(!open);
    };
    // Check intro
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
        <div className='flex flex-col justify-center h-[90vh] md:h-screen'>
            {/* Intro animation */}
            <PageTransition intro={intro} open={open} />

            {!intro && <><div className='overflow-hidden flex flex-col h-[90vh] md:h-screen items-center gap-5 text-white text-6xl'>



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