import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import Image from 'next/image';
import title from '/public/title.svg'

// Menu component with animations
const Menu = ({ isOpen, intro }: { isOpen: boolean, intro: boolean }) => {
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
        { name: 'Team', url: '/team', speed: 1.3, length: +100 },
        { name: 'Projects', url: '/projects', speed: 1.2, length: +50 },
        { name: 'Construction', url: '/construction', speed: 1.1, length: 0 },
        { name: 'About', url: '/about', speed: 1.2, length: -50 }
    ];

    // Check if the client is Mobile or not
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

    // Render the menu component
    if (!intro) {
        return (
            <motion.div
                className='flex flex-col px-32 h-screen w-screen items-center'
            >
                {/* Logo Animation */}
                <motion.div
                    className='text-primary text-center text-6xl mt-16'
                    // Initial animation setup
                    initial={{ opacity: 0, y: 0 }}
                    // Animation for opening and closing menu
                    animate={!isMobile ? (isOpen ? { opacity: [0, 0, 0, 0, 1, 1], y: ["0vh", "15vh", "15vh"], x: [0, 0, 0, 100, 100] } : { opacity: [null, 0, 0, 0, 0, 0], y: ["15vh", "15vh", "15vh"], x: [null, 60, 0, 0, 0, 0] }) : (isOpen ? { opacity: [0, 0, 0, 0, 1, 1], y: ["0vh", "15vh", "15vh"], x: [0, 0, 0, 50, 50] } : { opacity: [null, 0, 0, 0, 0, 0], y: ["15vh", "15vh", "15vh"], x: [null, 20, 0, 0, 0, 0] })}
                    // Exit animation
                    exit={isOpen && { opacity: [1, 1, 1, 1, 0], y: "15vh", x: [100, 100, 100, 60, 60], transition: { delay: 0 } }}
                    transition={isOpen ? { duration: 2.1, times: [0, .2, .5, .8, 1], delay: .8, exitdelay: 0 } : { duration: 2.1, times: [0, .2, .5, .8, 1], delay: 0 }}
                >
                    {/* Link to Home */}
                    <Link href="/"><Image src={title} width={200} height={200} className='w-64' alt='logo'></Image></Link>
                </motion.div>
                {/* Menu Links */}
                <motion.div
                    // Initial animation setup
                    initial={{ opacity: .7, y: "0vh" }}
                    // Animation for opening and closing menu
                    animate={!isMobile ? { opacity: 1, y: "40vh" } : { opacity: 1, y: "20vh" }}
                    // Exit animation
                    exit={!isMobile ? { opacity: .7, y: "50vh" } : { opacity: .7, y: "10vh" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=" bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <ul className='header mt-0 md:-mt-16 md:h-auto text-xl  flex flex-col md:flex-row gap-2 justify-between items-center font-bold'>
                        {links.map((link, index) => (
                            // Animated link item
                            <motion.div
                                key={index}
                                // Initial animation setup
                                initial={!isMobile ? { x: link.length, y: -50, opacity: 0 } : { y: link.length, opacity: 0 }}
                                // Animation for opening and closing menu
                                animate={isOpen ? { x: 0, y: 0, opacity: 1 } : (!isMobile ? { x: link.length, y: -50, opacity: 0 } : { y: link.length, opacity: 0 })}
                                // Exit animation
                                exit={{ x: link.length, y: -50, opacity: 0 }}
                                transition={isOpen ? { duration: 0.5, delay: link.speed } : { duration: 0.5, delay: link.speed / 100 }}
                                className='flex justify-center items-center w-44 '
                            >
                                <li className='flex flex-col gap-3 font-thin justify-center text-center'>
                                    {/* Menu Link */}
                                    <Link
                                        href={link.url}
                                        className='duration-500 text-xl text-center w-44 py-6 hover:text-white hover:-translate-y-2 text-zinc-400 tracking-[.2em] hover:tracking-normal'
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            </motion.div>
                        ))}
                    </ul>
                </motion.div >
            </motion.div >
        );
    }
}


export default Menu;
