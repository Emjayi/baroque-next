import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image';
import title from '/public/title.svg'

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
        { name: 'Team', url: '/team', speed: 1.3, length: +50 },
        { name: 'Projects', url: '/projects', speed: 1.2, length: +50 },
        { name: 'Construction', url: '/construction', speed: 1.1, length: 0 },
        { name: 'About', url: '/about', speed: 1.2, length: -50 }
    ];

    // Render the menu component
    return (
        <motion.div
            className='flex flex-col px-32 h-screen w-screen items-center'
        >
            <motion.div
                className='text-primary text-center text-6xl mt-16'
                initial={{ opacity: 0, y: 0 }}
                animate={open ? { opacity: [0, 0, 1], y: [0, -20, -40] } : { opacity: [0, 0, 1], y: [0, 0, 0] }}
                exit={{ opacity: [1, 1, 0], y: [-40, 0, -250] }}
                transition={{ duration: 2.1, times: [0, .5, 1] }}
            >
                <Link href="/"><Image src={title} width={200} height={200} alt='logo'></Image></Link>
            </motion.div>
            <motion.div
                initial={{ opacity: .7, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: .7, y: -15 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className=" bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                <ul className='header h-[60vh] md:h-auto text-xl flex flex-col md:flex-row gap-2 justify-between items-center font-bold'>
                    {isMounted && // Only render links when the component is mounted
                        links.map((link, index) => (
                            // Animated link item
                            <motion.div
                                key={index}
                                initial={{ x: link.length, y: 50, opacity: 0 }}
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                exit={{ x: link.length, y: 50, opacity: 0 }}
                                transition={{ duration: 0.5, delay: link.speed }}
                                className='flex justify-center items-center w-44 humb'
                            >
                                <li className='flex flex-col gap-3 font-thin md:hover:bg-white/0 hover:bg-primary/80 py-6 justify-center text-center'>
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
