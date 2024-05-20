import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Menu from './menu';
import HorizontalScroll from './HorizontalScroll';
import { UilBars } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import Intro from './Intro';
import Footer from './Footer';
import PageTransition from './PageTransition';


const PageWrapper = ({ pageName, children }: any) => {

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
        <div className='flex items-center h-[90vh] md:h-screen'>


            <HorizontalScroll></HorizontalScroll>

            {/*Logo Animation*/}
            <PageTransition intro={intro} open={open} />


            <motion.div
                exit={{ opacity: 0, transition: { duration: .3 } }}
                transition={{ duration: .5, ease: "easeInOut" }}>
                <AnimatePresence mode='wait'>
                    {!open && !intro &&
                        <><motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .5, ease: "easeInOut" }}
                            exit={{ opacity: 0, transition: { duration: .3 } }}
                            className='md:h-screen flex items-center'>

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
                                className='z-20 relative flex'
                            >
                                {children}
                            </motion.div>

                        </motion.div><Footer /></>
                    }
                </AnimatePresence>
            </motion.div>

            {
                !intro && <motion.button
                    initial={{ width: 45, opacity: 0, y: -10 }}
                    animate={menuHover ? { width: 100, opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    style={menuHover && { clipPath: 'polygon(100% 0, 100% 40%, 100% 40%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px, 12px 0)' }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: .5, ease: "easeInOut", delay: .2 }}
                    onClick={() => setOpen(!open)}
                    onMouseEnter={() => setMenuHover(true)}
                    onMouseLeave={() => setMenuHover(false)}
                    className='humb hidden fixed md:flex top-10 left-5 px-[4px] py-[12px] bg-primary/70 hover:bg-primary/90 duration-150 text-white z-50'>
                    <motion.div className='relative top-1'>{!open && <UilBars />}{open && <UilMultiply />}</motion.div>
                    <AnimatePresence>
                        {menuHover && <motion.p className=' hidden md:block relative top-1 -left-7' initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 40 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: .5, ease: "easeInOut", delay: .4 }}>{!open ? "Menu" : "Close"}</motion.p>}
                    </AnimatePresence>
                </motion.button>
            }

            {
                !intro && <motion.button
                    initial={{ width: 60, opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: .5, ease: "easeInOut", delay: .5 }}
                    onClick={() => setOpen(!open)}
                    className='humb md:hidden fixed flex top-10 left-5 px-[16px] py-[16px] bg-primary/70 text-white z-50'>
                    <motion.div>{!open && <UilBars />}{open && <UilMultiply />}</motion.div>
                </motion.button>
            }


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className='h-screen w-screen fixed top-0 left-0 flex flex-col justify-center items-center'>
                <Menu isOpen={open} />
            </motion.div>
        </div >
    )
}

export default PageWrapper
