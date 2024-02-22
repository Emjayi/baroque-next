import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Menu from './menu';
import HorizontalScroll from './horizontalScroll';

const PageWrapper = ({ pageName, children }: any) => {

    //Menu links array
    const links = [
        { key: 1, name: 'Team', url: '/team', speed: 0.1, length: -50 },
        { key: 2, name: 'Construction', url: '/construction', speed: 0.2, length: -10 },
        { key: 3, name: 'Projects', url: '/projects', speed: 0.1, length: +50 },
        { key: 4, name: 'About', url: '/about', speed: 0.2, length: -50 },
        { key: 5, name: 'Press', url: '/press', speed: 0.1, length: +50 }
    ];

    //Intro duration
    const [intro, setIntro] = useState(true);
    setTimeout(() => {
        setIntro(false)
    }, 3400);

    const [open, setOpen] = useState(false);

    return (
        <>
            {/*Noisy background*/}
            <div className='bg'></div>


            <AnimatePresence>
                <motion.div>
                    <HorizontalScroll>
                        <div className='grid grid-cols-3 grid-rows-3 gap-0 place-items-center h-screen w-screen fixed'>
                            <AnimatePresence>
                                <motion.div className=' row-start-2 col-start-2 grid grid-rows-9 grid-cols-9 w-64 h-64'>
                                    <AnimatePresence>
                                        {intro && <>
                                            <motion.div
                                                initial={{ y: -350 }}
                                                animate={{ scaleX: [15, 1], y: 0 }}
                                                exit={{ scaleX: [1, 15], y: -350 }}
                                                transition={{ times: [0, .2, .4, .5, .7, .9, 2], duration: 1 }}
                                                className=' row-start-1 col-start-1 col-span-9 bg-primary'>
                                            </motion.div>
                                            <motion.div
                                                initial={{ x: 1000 }}
                                                animate={{ scaleY: [10, 1], x: 0 }}
                                                exit={{ scaleY: [1, 10], x: 1000 }}
                                                transition={{ times: [0, .2, .4, .5, .7, .9, 2], duration: 1 }}
                                                className=' row-start-1 col-start-9 row-span-9 bg-primary'>
                                            </motion.div>
                                            <motion.div
                                                initial={{ x: -1000 }}
                                                animate={{ scaleY: [10, 1], opacity: 1, x: 0 }}
                                                exit={{ scaleY: [1, 10], x: -1000 }}
                                                transition={{ times: [0, .2, .4, .5, .7, .9, 2], duration: 1 }}
                                                className=' row-start-1 col-start-1 row-span-9 bg-primary'>
                                            </motion.div>
                                            <motion.div
                                                initial={{ y: 350 }}
                                                animate={{ scaleX: [15, 1], y: 0 }}
                                                exit={{ scaleX: [1, 15], y: 350 }}
                                                transition={{ times: [0, .2, .4, .5, .7, .9, 2], duration: 1 }}
                                                className=' row-start-9 col-start-1 col-span-9 bg-primary'>
                                            </motion.div>
                                        </>}
                                    </AnimatePresence>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <AnimatePresence>
                            <motion.div
                                initial={{ scale: 0.2 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ duration: 1, delay: 3.2 }}
                                className='flex'
                            >
                                {!intro && <div className=' h-screen flex items-center'>
                                    <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut", delay: .5 }}
                                        className='text-white text-xl w-36 ml-32 pr-4'>{pageName}</motion.h1>
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, ease: "easeInOut", delay: .5 }}
                                        onClick={() => setOpen(!open)}
                                        className='fixed top-10 px-4 py-6 rounded-r-md text-white hover:bg-white duration-150 hover:text-zinc-700 z-50'>Menu</motion.button>
                                    <AnimatePresence>
                                        {open &&
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: .5, ease: "easeInOut" }}
                                                exit={{ opacity: 0 }}
                                                className='h-screen w-screen bg-secondary fixed top-0 left-0 flex flex-col justify-center items-center z-40'>
                                                <Menu isOpen={open} />
                                            </motion.div>}
                                    </AnimatePresence>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: .5, ease: "easeInOut", delay: .5 }}
                                        className=' min-w-48 mr-4'>
                                        <motion.div
                                            className='h-[2px] w-20 bg-primary'
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: [0, .3, .3, 0], x: 0 }}
                                            transition={{ times: [0, .3, .7, 1], ease: "easeInOut", duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                        ></motion.div>
                                    </motion.div>

                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ opacity: 0, }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 2, ease: "easeInOut", delay: .5 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            {children}
                                        </motion.div>
                                    </AnimatePresence>

                                </div>}

                            </motion.div>
                        </AnimatePresence>
                    </HorizontalScroll>
                </motion.div>
            </AnimatePresence>

        </>
    )
}

export default PageWrapper
// {
//     intro && <motion.div exit={{ scale: 2, opacity: [1, 1, 0] }} transition={{ times: [0, .95, 1], duration: 1 }} className='grid grid-cols-3 grid-rows-3 gap-0 place-items-center h-screen'>
//         <AnimatePresence>
//             {intro && (<><motion.div exit={{ scale: 10 }} className='grid grid-cols-3 grid-rows-3 row-start-2 col-start-2'>
//                 <motion.div
//                     animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }}
//                     transition={{ times: [0, .2, .6], duration: 1, repeat: Infinity, repeatDelay: .1 }}
//                     className='col-start-1 bg-primary w-[50px] h-[10px]'></motion.div>
//                 <motion.div
//                     animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }}
//                     transition={{ times: [0, .4, .8], duration: 1, repeat: Infinity, repeatDelay: .1 }}
//                     exit={{ scale: 10, opacity: [1, 1, 0] }}
//                     className='col-start-3 bg-primary w-[50px] h-[10px]'>
//                 </motion.div>
//                 <motion.div
//                     initial={{ y: 0 }}
//                     animate={{ y: [0, 0, 0, 0, 0, 0], x: [0, 0, 0, 50, -50, 0, 0] }}
//                     transition={{ times: [0, .5, 1], duration: 2, repeat: Infinity, repeatDelay: 1 }}
//                     className='col-start-2 row-start-2 bg-primary w-[25px] h-full'
//                 ></motion.div>
//                 <motion.div
//                     initial={{ y: 0 }}
//                     animate={{ y: [0, 0, 0, 0, 0, 0], x: [0, 0, 0, -50, 50, 0, 0] }}
//                     transition={{ times: [0, .5, 1], duration: 2, repeat: Infinity, repeatDelay: 1 }}
//                     className='col-start-2 row-start-2 bg-primary ml-[25px] w-[25px] h-full'
//                 ></motion.div>
//                 <motion.div
//                     animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }}
//                     transition={{ times: [0, .3, .6], duration: 1, repeat: Infinity, repeatDelay: .1 }}
//                     className='col-start-1 row-start-3 bg-primary w-full h-[10px]'
//                 ></motion.div>
//                 <motion.div
//                     animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }}
//                     transition={{ times: [0, .3, .7], duration: 1, repeat: Infinity, repeatDelay: .1 }}
//                     className='col-start-3 row-start-3 bg-primary w-full h-full'
//                 ></motion.div>
//             </motion.div>
//                 <div className='row-start-3 col-start-2'><h1 className=' text-zinc-300 text-lg'>Loading...</h1></div></>)}
//         </AnimatePresence>
//         <AnimatePresence>
//             {!intro && <motion.div
//                 className='row-start-2 col-start-2 h-screen w-screen'
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, ease: "easeInOut" }}
//             >

//             </motion.div>}
//         </AnimatePresence>
//     </motion.div>
// }