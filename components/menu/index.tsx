import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

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
        { name: 'Team', url: '/team', speed: 0.1, length: -50 },
        { name: 'Construction', url: '/construction', speed: 0.2, length: -10 },
        { name: 'Projects', url: '/projects', speed: 0.1, length: +50 },
        { name: 'About us', url: '/about', speed: 0.2, length: -50 },
        { name: 'Press', url: '/press', speed: 0.1, length: +50 }
    ];

    // Render the menu component
    return (
        <><div className='bg'></div><div className='menu fixed h-full w-full z-100'>
            <div className='flex flex-col'>
                <div>
                    {/* Animated menu container */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={controls}
                        className=' text-3xl text-zinc-500 flex items-center justify-start flex-col w-full h-screen p-24 duration-200'
                    >
                        {/* Menu title */}
                        {/* <h1 className='text-4xl font-bold text-center text-yellow-600'>Baroque</h1> */}

                        {/* List of menu links */}
                        <ul className='header text-xl flex flex-col gap-2 justify-between items-center font-bold mt-6'>
                            {isMounted && // Only render links when the component is mounted
                                links.map((link, index) => (
                                    // Animated link item
                                    <motion.div
                                        key={index}
                                        initial={{ x: link.length, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: link.speed }}
                                        className='flex justify-center items-center'
                                    >

                                        <li className='flex flex-col w-64 justify-center text-center'>
                                            <Link
                                                href={link.url}
                                                className='duration-200 text-3xl  hover:text-white text-zinc-200 tracking-[.2em] hover:tracking-normal'
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    </motion.div>
                                ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div></>
    )
}

//Some of the comments have been rewritten with the help of ChatGPT! Sorry for any possible mistake.
export default Menu;
