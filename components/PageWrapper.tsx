// import React, { useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion';
// import Menu from './menu';
// import HorizontalScroll from './horizontalScroll';
// import { UilBars } from '@iconscout/react-unicons'
// import Intro from './layout/Intro';
// import Link from 'next/link';

// const PageWrapper = ({ pageName, children }: any) => {

//     const [menuHover, setMenuHover] = useState(false)

//     //Menu links array
//     const links = [
//         { key: 1, name: 'Team', url: '/team', speed: 0.1, length: -50 },
//         { key: 2, name: 'Construction', url: '/construction', speed: 0.2, length: -10 },
//         { key: 3, name: 'Projects', url: '/projects', speed: 0.1, length: +50 },
//         { key: 4, name: 'About', url: '/about', speed: 0.2, length: -50 },
//         { key: 5, name: 'Press', url: '/press', speed: 0.1, length: +50 }
//     ];

//     //Intro duration
//     const [intro, setIntro] = useState(true);
//     setTimeout(() => {
//         setIntro(false)
//     }, 1800);

//     const [open, setOpen] = useState(false);

//     return (
//         <div>

//             <motion.div

//             >
//                 <HorizontalScroll>
//                     {/* <motion.div className='fixed z-0 flex h-screen w-screen justify-center items-center left-auto top-auto'>
//                     <motion.svg
//                         initial={{ scale: 1, opacity: 1 }}
//                         animate={{ scale: [1, 1, 1, 10], opacity: .02 }}
//                         exit={{ scale: [10, 1, 1, 1], opacity: 1 }}
//                         transition={{ duration: 2, times: [0, .5, .8, 1], ease: "easeInOut", delay: .2 }}
//                         version="1.1" id="Layer_1" className='w-[600px] h-[600px]'
//                         viewBox="0 0 5463.4 3168.8">
//                         <g>
//                             <motion.path
//                                 fill="#D2AC72"
//                                 className="" d="M3053.6,1262.3V719.5h-614.2l-301.3,301.3v1428.5h885.7l301.3-301.3v-885.7L3053.6,1262.3L3053.6,1262.3z
// M3223.8,2106l-241.9,241.9h-742.4V1062.6l241.9-241.9h471v542.8h271.4L3223.8,2106L3223.8,2106z"/>
//                             <motion.path
//                                 fill='transparent'
//                                 strokeWidth={10}
//                                 className="" d="M2782.2,1092.2V990.9h-372.7v1186.9h644.1v-644.1h-271.4V1092.2 M2952.4,2076.5h-441.5v-984.3H2681V1635h271.4
// L2952.4,2076.5L2952.4,2076.5z" />
//                         </g>
//                     </motion.svg>

//                 </motion.div> */}

//                     {intro && <motion.div exit={{ opacity: 0 }} className='grid grid-cols-3 grid-rows-3 gap-0 place-items-center h-screen'>

//                         <AnimatePresence>

//                             <Intro isIntro={intro} />

//                         </AnimatePresence>
//                     </motion.div>}


//                     <div className='bg'></div>

//                     {/* Intro animation */}

//                     <motion.div

//                         transition={{ duration: 1, delay: 1.2 }}
//                         className='flex'
//                     >
//                         {!intro && <div className=' h-screen flex items-center'>
//                             <motion.h1
//                                 className='text-white text-xl w-36 ml-32 pr-4'>{pageName}</motion.h1>
//                             <motion.button
//                                 initial={{ width: 60, opacity: 0 }}
//                                 animate={menuHover ? { width: 110, opacity: 1 } : { opacity: 1 }}
//                                 transition={{ duration: .5, ease: "easeInOut", delay: .2 }}
//                                 onClick={() => setOpen(!open)}
//                                 onMouseEnter={() => setMenuHover(!menuHover)}
//                                 onMouseLeave={() => setMenuHover(!menuHover)}
//                                 className='fixed flex top-10 px-4 py-6 rounded-r-md bg-primary duration-150 text-white z-50'>
//                                 <UilBars /><AnimatePresence>{menuHover && <motion.p className='fixed' initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 40 }} exit={{ opacity: 0, x: 0 }} transition={{ duration: .5, ease: "easeInOut", delay: .4 }}>Menu</motion.p>}</AnimatePresence>
//                             </motion.button>
//                             <AnimatePresence>
//                                 {open &&
//                                     <motion.div
//                                         // initial={{ opacity: 0 }}
//                                         // animate={{ opacity: 1 }}
//                                         // transition={{ duration: .5, ease: "easeInOut" }}
//                                         // exit={{ opacity: 0 }}
//                                         className='h-screen w-screen bg-secondary fixed top-0 left-0 flex flex-col justify-center items-center z-40'>
//                                         <Menu isOpen={open} />
//                                     </motion.div>}
//                             </AnimatePresence>
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ duration: .5, ease: "easeInOut", delay: .5 }}
//                                 className=' min-w-48 mr-4'>
//                                 <motion.div
//                                     className='h-[2px] w-20 bg-primary'
//                                     initial={{ opacity: 0, x: 100 }}
//                                     animate={{ opacity: [0, .3, .3, 0], x: 0 }}
//                                     transition={{ times: [0, .3, .7, 1], ease: "easeInOut", duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
//                                 ></motion.div>
//                             </motion.div>

//                             <AnimatePresence>
//                                 <motion.div
//                                     initial={{ opacity: 0, }}
//                                     animate={{ opacity: 1 }}
//                                     transition={{ duration: 2, ease: "easeInOut", delay: .5 }}
//                                     exit={{ opacity: 0 }}
//                                 >
//                                     {children}
//                                 </motion.div>
//                             </AnimatePresence>

//                         </div>}

//                     </motion.div>


//                 </HorizontalScroll>
//             </motion.div>


//         </div >
//     )
// }

// export default PageWrapper
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
//            
//             </motion.div>}
//         </AnimatePresence>
//     </motion.div>
// }

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Menu from './menu';
import HorizontalScroll from './horizontalScroll';
import { UilBars } from '@iconscout/react-unicons'
import Intro from './layout/Intro';
import Link from 'next/link';

const PageWrapper = ({ pageName, children }: any) => {

    const [menuHover, setMenuHover] = useState(false)

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
    useEffect(() => {
        const timer = setTimeout(() => {
            setIntro(false)
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    const [open, setOpen] = useState(false);

    return (
        <div className='pagewrapper'>
            <HorizontalScroll></HorizontalScroll>
            <motion.div className='fixed z-0 flex h-screen w-screen justify-center items-center left-auto top-auto'>
                <motion.svg
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: [1, 1, 1, 10], opacity: .02 }}
                    exit={{ scale: [10, 10, 1, 1], opacity: [.02, .1, 1, 1] }}
                    transition={{ duration: 1.6, times: [0, .5, .8, 1], ease: "easeInOut" }}
                    version="1.1" id="Layer_1" className='w-[600px] h-[600px]'
                    viewBox="0 0 5463.4 3168.8">
                    <g>
                        <motion.path
                            fill="#D2AC72"
                            className="" d="M3053.6,1262.3V719.5h-614.2l-301.3,301.3v1428.5h885.7l301.3-301.3v-885.7L3053.6,1262.3L3053.6,1262.3z
 M3223.8,2106l-241.9,241.9h-742.4V1062.6l241.9-241.9h471v542.8h271.4L3223.8,2106L3223.8,2106z"/>
                        <motion.path
                            fill='transparent'
                            strokeWidth={10}
                            className="" d="M2782.2,1092.2V990.9h-372.7v1186.9h644.1v-644.1h-271.4V1092.2 M2952.4,2076.5h-441.5v-984.3H2681V1635h271.4
 L2952.4,2076.5L2952.4,2076.5z" />
                    </g>
                </motion.svg>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .2 }}
            >
                {intro && <motion.div exit={{ opacity: 0 }} className='grid grid-cols-3 grid-rows-3 gap-0 place-items-center h-screen'>
                    <AnimatePresence>
                        <Intro isIntro={intro} />
                    </AnimatePresence>
                </motion.div>}
                <div className='bg'></div>
                <motion.div
                    className='flex'
                >
                    {!intro && <div className=' h-screen flex items-center'>
                        <motion.h1
                            className='text-white text-xl w-36 ml-32 pr-4'>{pageName}</motion.h1>
                        <motion.button
                            initial={{ width: 60, opacity: 0 }}
                            animate={menuHover ? { width: 110, opacity: 1 } : { opacity: 1 }}
                            transition={{ duration: .5, ease: "easeInOut", delay: .2 }}
                            onClick={() => setOpen(!open)}
                            onMouseEnter={() => setMenuHover(!menuHover)}
                            onMouseLeave={() => setMenuHover(!menuHover)}
                            className='fixed flex top-10 px-4 py-6 rounded-r-md bg-primary duration-150 text-white z-50'>
                            <UilBars /><AnimatePresence>{menuHover && <motion.p className='fixed' initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 40 }} exit={{ opacity: 0, x: 0 }} transition={{ duration: .5, ease: "easeInOut", delay: .4 }}>Menu</motion.p>}</AnimatePresence>
                        </motion.button>
                        <AnimatePresence>
                            {open &&
                                <motion.div
                                    className='h-screen w-screen bg-secondary fixed top-0 left-0 flex flex-col justify-center items-center z-40'>
                                    <Menu isOpen={open} />
                                </motion.div>}
                        </AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .5, ease: "easeInOut" }}
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
                                transition={{ duration: .5, ease: "easeInOut" }}
                                exit={{ opacity: 0 }}
                            >
                                {children}
                            </motion.div>
                        </AnimatePresence>
                    </div>}
                </motion.div>
            </motion.div>
        </div >
    )
}

export default PageWrapper
