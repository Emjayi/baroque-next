import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Menu from './menu';
import HorizontalScroll from './horizontalScroll';
import { UilBars } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import Intro from './layout/Intro';
import Footer from './footer';


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
            <div className='bg hidden md:block'></div>

            <HorizontalScroll></HorizontalScroll>

            {/*Logo Animation*/}
            <motion.div className={!intro ? 'fixed z-0 flex left-0 right-0 justify-center items-center opacity-45 md:opacity-100' : 'fixed z-0 flex left-0 right-0 justify-center items-center opacity-55 md:opacity-100'}>
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
                            exit={!intro ? (open ? { scale: [1, .9, 1, 1, 1, .5], opacity: [1, .4, 1, .3, .6, 0] } : { scale: [10, 10, 1, 1], opacity: [0, 0, 0, 0] }) : { scale: [10, 10, 1, 1], opacity: [0, 0, 0, 0] }}
                            transition={{ duration: 1.6, times: [0, .5, .8, 1], ease: "easeInOut" }}
                            fill='#D2AC72'
                            strokeWidth={10}
                            className="" d="M2782.2,1092.2V990.9h-372.7v1186.9h644.1v-644.1h-271.4V1092.2 M2952.4,2076.5h-441.5v-984.3H2681V1635h271.4
 L2952.4,2076.5L2952.4,2076.5z" />
                    </g>
                </motion.svg>
            </motion.div>


            {!open && intro && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >

                <motion.div>
                    <Intro isIntro={intro} />
                </motion.div>
            </motion.div>}

            {!open && !intro &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5, ease: "easeInOut" }}
                    exit={{ opacity: 0 }}
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
                        className='z-20 relative'
                    >
                        {children}
                    </motion.div>

                    <Footer />

                </motion.div>}

            {
                !intro && <motion.button
                    initial={{ width: 50, opacity: 0, y: -10 }}
                    animate={menuHover ? { width: 100, opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    style={menuHover && { clipPath: 'polygon(100% 0, 100% 40%, 100% 40%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px, 12px 0)' }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: .5, ease: "easeInOut", delay: .2 }}
                    onClick={() => setOpen(!open)}
                    onMouseEnter={() => setMenuHover(true)}
                    onMouseLeave={() => setMenuHover(false)}
                    className='humb hidden fixed md:flex top-10 left-5 px-[6px] py-[16px] bg-primary/70 hover:bg-primary/90 duration-150 text-white z-50'>
                    <motion.div>{!open && <UilBars />}{open && <UilMultiply />}</motion.div>
                    <AnimatePresence>
                        {menuHover && <motion.p className='fixed hidden md:block' initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 40 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: .5, ease: "easeInOut", delay: .4 }}>{!open ? "Menu" : "Close"}</motion.p>}
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
            {
                open &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className='h-screen w-screen fixed top-0 left-0 flex flex-col justify-center items-center z-40'>
                    <Menu isOpen={open} />
                </motion.div>
            }
        </div >
    )
}

export default PageWrapper
