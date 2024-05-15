import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from '../components/layout/menu';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import AnimatedText from '../components/layout/AnimatedText';
import TextLoop from '../components/layout/TextLoop';

// App component with animations
const App = () => {

    // DATA
    const aboutText = "Baroque, your lovely company."
    const aboutTitles = ["Architecture", "Simplicity", "Elegance", "Greatness", "Shining"]

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
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { delay: 0 } }}
                                    transition={{ duration: .2, delay: 1 }}
                                    className='text-xl md:text-3xl absolute w-screen uppercase top-64 text-center'>
                                    <AnimatedText delay={1} duration={2} text={aboutText} className='' />
                                </motion.h1>
                                {/* {aboutTitles.map(() => (
                                    < motion.h2
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, transition: { delay: 0 } }}
                                        transition={{ duration: .2, delay: .2 }}
                                        className='text-xl text-zinc-400 absolute uppercase w-screen top-80 text-center'>
                                        <AnimatedText delay={.2} duration={1} className='' text={aboutTitles} />
                                    </motion.h2>
                                ))} */}
                                <TextLoop className='text-sm md:text-xl text-zinc-400 absolute w-screen top-80 text-center' titles={aboutTitles} />


                                <motion.button
                                    onClick={toggleMenu}
                                    className='text-white flex tracking-widest hover:tracking-normal justify-center items-end text-center h-96 w-[50vw] text-2xl duration-200 absolute bottom-24'
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
        </div >
    );
};

export default App;