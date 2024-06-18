import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import Image from 'next/image';
import title from '/public/title.svg'
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Team', url: '/team', speed: 1.3, length: 100 },
    { name: 'Projects', url: '/projects', speed: 1.2, length: 50 },
    { name: 'Construction', url: '/construction', speed: 1.1, length: 0 },
    { name: 'About', url: '/about', speed: 1.2, length: -50 }
];

const Menu = ({ isOpen, setIsOpen, intro }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, intro: boolean }) => {
    const path = usePathname()
    const controls = useAnimation();

    useEffect(() => {
        if (isOpen) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 }
            });
        } else {
            controls.start({
                x: -50,
                opacity: 0,
                transition: { duration: 0.5 }
            });
        }
    }, [isOpen]);

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!intro) {
        return (
            <motion.div
                className='flex flex-col px-32 h-screen w-screen items-center'
            >
                <motion.div
                    className='text-primary text-center text-6xl mt-16'
                    initial={{ opacity: 0, y: 0 }}
                    animate={!isMobile ? (isOpen ? { opacity: [0, 0, 0, 0, 1, 1], y: [null, "20dvh", "20dvh"], x: [0, 0, 0, 100, 100] } : { opacity: [null, 0, 0, 0, 0, 0], y: null, x: [null, 60, 0, 0, 0, 0] }) : (isOpen ? { opacity: [0, 0, 0, 0, 1, 1], y: [null, "13dvh", "13dvh"], x: [0, 0, 0, 50, 50] } : { opacity: [null, 0, 0, 0, 0, 0], y: ["13dvh", "13dvh", "13dvh"], x: [null, 20, 0, 0, 0, 0] })}
                    exit={!isMobile ? (isOpen && { opacity: [1, 1, 1, 1, 0], x: [null, null, null, 60, 60], transition: { delay: 0 } }) : (isOpen && { opacity: [1, 1, 1, 1, 0], x: [null, null, null, 30, 30], transition: { delay: 0 } })}
                    transition={isOpen ? { duration: 2.1, times: [0, .2, .5, .8, 1], delay: .8, exitdelay: 0 } : { duration: 2.1, times: [0, .2, .5, .8, 1], delay: 0 }}
                >
                    <Link href="/" onClick={() => path === "/" && setIsOpen(false)}><Image src={title} width={200} height={200} className='w-64' alt='logo'></Image></Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: .7, y: "0dvh" }}
                    animate={!isMobile ? { opacity: 1, y: "40dvh" } : { opacity: 1, y: "20dvh" }}
                    exit={!isMobile ? { opacity: .7, y: "50dvh" } : { opacity: .7 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <ul className='header mt-0 md:-mt-16 md:h-auto text-xl  flex flex-col md:flex-row md:gap-2 justify-between items-center font-bold'>
                        {links.map((link, index) => (
                            <motion.div
                                key={index}
                                initial={!isMobile ? { x: link.length, y: -50, opacity: 0 } : { y: link.length, opacity: 0 }}
                                animate={isOpen ? { x: 0, y: 0, opacity: 1 } : (!isMobile ? { x: link.length, opacity: 0 } : { y: link.length, opacity: 0 })}
                                exit={!isMobile ? { x: link.length, y: -50, opacity: 0 } : { y: link.length, opacity: 0 }}
                                transition={isOpen ? { duration: 0.5, delay: link.speed } : { duration: 0.5, delay: link.speed / 100 }}
                                className='flex justify-center items-center w-44 '
                            >
                                <li className='flex flex-col gap-3 font-thin justify-center text-center'>
                                    <Link
                                        href={link.url}
                                        onClick={() => link.url === path && setIsOpen(false)}
                                        className='md:duration-500 text-xl text-center w-44 py-6 md:hover:text-white active:text-white active:text-bold duration-150 md:hover:-translate-y-2 text-zinc-400 tracking-normal md:tracking-[.2em] hover:tracking-normal'
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
