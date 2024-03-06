// import Link from 'next/link'
// import React, { useState, useEffect } from 'react'
// import { motion, useAnimation } from 'framer-motion'
// import Spline from '@splinetool/react-spline';
// import Logo from './logo';
// import { LampContainer } from '../ui/lamp';


// // Menu component with animations
// const Menu = ({ isOpen }: { isOpen: boolean }) => {
//     // State to track if the component is mounted
//     const [isMounted, setIsMounted] = useState(false);

//     // Animation controls
//     const controls = useAnimation();

//     // Effect to handle animation when 'isOpen' prop changes
//     useEffect(() => {
//         // Play slide-in animation when the menu is opened
//         if (isOpen) {
//             controls.start({
//                 x: 0,
//                 opacity: 1,
//                 transition: { duration: 0.5, delay: 0.2 }
//             });
//         } else {
//             // Slide out animation when the menu is closed
//             controls.start({
//                 x: -50,
//                 opacity: 0,
//                 transition: { duration: 0.5 }
//             });
//         }
//     }, [isOpen]);

//     // Effect to set 'isMounted' to true when component mounts
//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     // List of menu links
//     const links = [
//         { name: 'Team', url: '/team', speed: 0.3, length: +50 },
//         { name: 'Projects', url: '/projects', speed: 0.2, length: +50 },
//         { name: 'Construction', url: '/construction', speed: 0.1, length: 0 },
//         { name: 'About', url: '/about', speed: 0.2, length: -50 },
//         { name: 'Press', url: '/press', speed: 0.3, length: -50 }
//     ];

//     // Render the menu component
//     return (
//         <motion.div
//             className=' h-screen w-screen justify-center'
//         >
//             {/*Noisy background*/}
//             <div className='bg '></div>
//             <div className='flex z-20 fixed top-0 justify-center items-center h-screen w-screen'>
//                 <motion.svg
//                     initial={{ y: 40, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     exit={{ y: 40, opacity: 0 }}
//                     transition={{ duration: 1 }}
//                     version="1.1" id="Layer_1" className='fixed w-[600px] h-[600px]'
//                     viewBox="0 0 5463.4 3168.8">
//                     <g>
//                         <motion.path
//                             initial={{ pathLength: 0, pathOffset: 0 }}
//                             animate={{ pathLength: 1, pathOffset: 0 }}

//                             transition={{ duration: 2, times: [0, .3, .8, 1], ease: "easeInOut" }}
//                             strokeWidth={30}
//                             stroke='#D2AC72'
//                             fill="transparent"
//                             className="" d="M3053.6,1262.3V719.5h-614.2l-301.3,301.3v1428.5h885.7l301.3-301.3v-885.7L3053.6,1262.3L3053.6,1262.3z
// 		 M3223.8,2106l-241.9,241.9h-742.4V1062.6l241.9-241.9h471v542.8h271.4L3223.8,2106L3223.8,2106z"/>
//                         <motion.path
//                             initial={{ scale: .9, opacity: 1, strokeDasharray: 20, pathLength: 0, pathOffset: 0, pathSpacing: 0 }}
//                             animate={{ scale: 1, opacity: 1, strokeDasharray: 1, pathLength: .5, pathOffset: .6, pathSpacing: .7 }}
//                             transition={{ duration: 2 }}
//                             fill='#D2AC72'
//                             strokeWidth={10}

//                             className="" d="M2782.2,1092.2V990.9h-372.7v1186.9h644.1v-644.1h-271.4V1092.2 M2952.4,2076.5h-441.5v-984.3H2681V1635h271.4
// 		L2952.4,2076.5L2952.4,2076.5z" />
//                     </g>
//                 </motion.svg>
//             </div>
//             <LampContainer className=''>
//                 <motion.div
//                     initial={{ opacity: .7, y: -15 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: .7, y: -150 }}
//                     transition={{
//                         delay: 0.3,
//                         duration: 0.8,
//                         ease: "easeInOut",
//                     }}
//                     className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
//                 >
//                     <ul className='header -mt-72 text-xl flex flex-col md:flex-row gap-2 justify-between items-center font-bold'>
//                         {isMounted && // Only render links when the component is mounted
//                             links.map((link, index) => (
//                                 // Animated link item
//                                 <motion.div
//                                     key={index}
//                                     initial={{ x: link.length, opacity: 0 }}
//                                     animate={{ x: 0, opacity: 1 }}
//                                     transition={{ duration: 0.5, delay: link.speed }}
//                                     className='flex justify-center items-center w-44'
//                                 >

//                                     <li className='flex flex-col gap-3 justify-center text-center'>
//                                         <Link
//                                             href={link.url}
//                                             className='duration-200 text-xl text-center w-44 hover:text-white text-zinc-200 tracking-[.2em] hover:tracking-normal'
//                                         >
//                                             {link.name}
//                                         </Link>
//                                     </li>
//                                 </motion.div>
//                             ))}
//                     </ul>

//                 </motion.div>
//             </LampContainer>
//             <div className='menu z-50  fixed top-5'>
//                 {/* Animated menu container */}
//                 <motion.div
//                     initial={{ y: -50, opacity: 0 }}
//                     animate={{ y: -25, opacity: 1 }}
//                     exit={{ y: -50, opacity: 0 }}
//                     className=' text-3xl text-zinc-500 flex items-center justify-center w-screen pt-16 duration-200'
//                 >

//                     {/* Menu title */}
//                     {/* <h1 className='text-4xl font-bold text-center text-yellow-600'>Baroque</h1> */}

//                     {/* List of menu links */}
//                     <Link href={"/"}><h1 className='text-primary text-center'>Baroque</h1></Link>

//                 </motion.div>
//             </div ></motion.div >
//     )
// }


// export default Menu;

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Spline from '@splinetool/react-spline';
import Logo from './logo';
import { LampContainer } from '../ui/lamp';


// Menu component with animations
const Menu = ({ isOpen }: { isOpen: boolean }) => {
    // State to track if the component is mounted
    const [isMounted, setIsMounted] = useState(false);

    // Animation controls
    const controls = useAnimation();

    // Effect to handle animation when 'isOpen' prop changes
    useEffect(() => {
        // Play slide-in animation when the menu is opened
        if (isOpen) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 }
            });
        } else {
            // Slide out animation when the menu is closed
            controls.start({
                x: -50,
                opacity: 0,
                transition: { duration: 0.5 }
            });
        }
    }, [isOpen]);

    // Effect to set 'isMounted' to true when component mounts
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // List of menu links
    const links = [
        { name: 'Team', url: '/team', speed: 0.3, length: +50 },
        { name: 'Projects', url: '/projects', speed: 0.2, length: +50 },
        { name: 'Construction', url: '/construction', speed: 0.1, length: 0 },
        { name: 'About', url: '/about', speed: 0.2, length: -50 },
        { name: 'Press', url: '/press', speed: 0.3, length: -50 }
    ];

    // Render the menu component
    return (
        <motion.div
            className='flex p-32 h-screen w-screen justify-center'
        >
            <motion.div
                initial={{ opacity: .7, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: .7, y: -150 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className=" bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                <ul className='header text-xl flex flex-col md:flex-row gap-2 justify-between items-center font-bold'>
                    {isMounted && // Only render links when the component is mounted
                        links.map((link, index) => (
                            // Animated link item
                            <motion.div
                                key={index}
                                initial={{ x: link.length, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: link.speed }}
                                className='flex justify-center items-center w-44'
                            >
                                <li className='flex flex-col gap-3 justify-center text-center'>
                                    <Link
                                        href={link.url}
                                        className='duration-200 text-xl text-center w-44 hover:text-white text-zinc-200 tracking-[.2em] hover:tracking-normal'
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            </motion.div>
                        ))}
                </ul>
            </motion.div>
        </motion.div >
    )
}


export default Menu;
