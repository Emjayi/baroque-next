import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Menu from './menu';
import HorizontalScroll from './HorizontalScroll';
import { UilBars } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import Footer from './Footer';
import PageTransition from './PageTransition';



const PageWrapper = ({ pageName, children }: any) => {

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

    const [menuHover, setMenuHover] = useState(false)

    //Intro duration
    const [intro, setIntro] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIntro(false)
        }, 3400);
        return () => clearTimeout(timer);
    }, []);

    const [open, setOpen] = useState(false);


    return (
        <motion.div className='flex items-center h-[100dvh] md:h-screen'>
            <HorizontalScroll></HorizontalScroll>

            {/*Logo Animation*/}
            <PageTransition intro={intro} open={open} />


            <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0 } }}
                transition={{ duration: .5, ease: "easeInOut" }}>
                <AnimatePresence mode='wait'>
                    {!open && !intro &&
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: .5, ease: "easeInOut" }}
                                exit={{ opacity: 0 }}
                                className='h-full md:h-screen flex items-center'>

                                <motion.h1 className='text-white uppercase text-xl min-w-36 ml-8 md:ml-32 pr-4'>{pageName}</motion.h1>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className=' min-w-48 mr-4'>

                                    <motion.div
                                        className='h-[2px] w-20 bg-primary'
                                        initial={{ opacity: 0, x: 100, scaleX: 1 }}
                                        animate={{ opacity: [0, .3, .3, 0], x: 0, scaleX: [.6, 1, 1, 1] }}
                                        transition={{ times: [0, .3, .7, 1], ease: "easeInOut", duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                    ></motion.div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    className='h-[100dvh] z-20 relative flex'
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </>
                    }
                </AnimatePresence>
            </motion.div>

            {!intro && <motion.button
                initial={{ width: 45, opacity: 0, y: -10 }}
                animate={menuHover ? { width: 100, opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                style={menuHover && { clipPath: 'polygon(100% 0, 100% 40%, 100% 40%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px, 12px 0)' }}
                exit={{ opacity: 0, y: -20, transition: { duration: .4, delay: .6 } }}
                transition={{ duration: .5, ease: "easeInOut", delay: .2 }}
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setMenuHover(true)}
                onMouseLeave={() => setMenuHover(false)}
                className='humb hidden fixed md:flex top-10 left-5 px-[4px] py-[12px] bg-primary/70 hover:bg-primary/90 duration-150 text-white z-50'>
                <motion.div className='relative top-1'>{!open && <UilBars />}{open && <UilMultiply />}</motion.div>
                <AnimatePresence>
                    {menuHover && <motion.p className=' hidden md:block relative top-1 -left-7' initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 40 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: .5, ease: "easeInOut", delay: .4 }}>{!open ? "Menu" : "Close"}</motion.p>}
                </AnimatePresence>
            </motion.button>}

            {!intro && <motion.button
                initial={!isMobile ? { width: 60, opacity: 0, y: -20 } : { opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: .4, delay: .5 } }}
                transition={{ duration: .5, ease: "easeInOut", delay: .2 }}
                onClick={() => setOpen(!open)}
                className={open ? 'md:humb md:hidden fixed flex top-[8dvh] left-5 p-[12px] bg-primary/0 text-white z-50 rounded-3xl' : ' md:humb md:hidden fixed flex top-[8dvh] left-5 p-[12px] bg-primary/40 text-white z-50'}>
                <motion.div>{!open && <UilBars />}{open && <UilMultiply />}</motion.div>
            </motion.button>}


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className='h-screen w-screen fixed top-0 left-0 flex flex-col justify-center items-center'>
                <Menu isOpen={open} intro={intro} setIsOpen={setOpen} />
            </motion.div>
            <Footer />
        </motion.div >
    )
}

export default PageWrapper
