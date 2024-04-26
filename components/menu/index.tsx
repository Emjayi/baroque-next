import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
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
    return (
        <motion.div
            className='flex flex-col px-32 h-screen w-screen items-center'
            // Apply background color animation for mobile devices
            animate={isMobile && { backgroundColor: "#11111199" }}
            transition={{ duration: 1.5 }}
            // Apply exit background color animation for mobile devices
            exit={isMobile && { backgroundColor: "#11111100" }}
        >
            {/* Logo Animation */}
            <motion.div
                className='text-primary text-center text-6xl mt-16'
                // Initial animation setup
                initial={{ opacity: 0, y: 0 }}
                // Animation for opening and closing menu
                animate={open ? { opacity: [0, 0, 1], y: [0, -20, -40] } : { opacity: [0, 0, 1], y: [0, 0, 0] }}
                // Exit animation
                exit={{ opacity: [1, 1, 0], y: [-40, -20, -150] }}
                transition={{ duration: 2.1, times: [0, .5, 1] }}
            >
                {/* Link to Home */}
                <Link href="/"><Image src={title} width={200} height={200} className='w-64' alt='logo'></Image></Link>
            </motion.div>
            {/* Menu Links */}
            <motion.div
                // Initial animation setup
                initial={{ opacity: .7, y: -15 }}
                // Animation for opening and closing menu
                animate={{ opacity: 1, y: 0 }}
                // Exit animation
                exit={{ opacity: .7, y: -15 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className=" bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                <ul className='header mt-0 md:-mt-16 h-[60vh] md:h-auto text-xl  flex flex-col md:flex-row gap-2 justify-between items-center font-bold'>
                    {isMounted && // Only render links when the component is mounted
                        links.map((link, index) => (
                            // Animated link item
                            <motion.div
                                key={index}
                                // Initial animation setup
                                initial={{ x: link.length, y: 50, opacity: 0 }}
                                // Animation for opening and closing menu
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                // Exit animation
                                exit={{ x: link.length, y: 50, opacity: 0 }}
                                transition={{ duration: 0.5, delay: link.speed }}
                                className='flex justify-center items-center w-44 '
                            >
                                <li className='flex flex-col gap-3 font-thin justify-center text-center'>
                                    {/* Menu Link */}
                                    <Link
                                        href={link.url}
                                        className='duration-200 text-xl text-center w-44 py-6 hover:text-white text-zinc-200 tracking-[.2em] hover:tracking-normal'
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            </motion.div>
                        ))}
                </ul>
            </motion.div>
        </motion.div >
    );
}


export default Menu;
