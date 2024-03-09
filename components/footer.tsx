import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

// List of menu links
const links = [
    { key: 1, name: 'Team', url: '/team', speed: 0.1, length: -50 },
    { key: 2, name: 'Construction', url: '/construction', speed: 0.2, length: -10 },
    { key: 3, name: 'Projects', url: '/projects', speed: 0.1, length: +50 },
    { key: 4, name: 'About', url: '/about', speed: 0.2, length: -50 },
    { key: 5, name: 'Press', url: '/press', speed: 0.1, length: +50 }
];
const Footer = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 25, damping: 10, delay: 1 }}
                className='absolute text-[12px] text-sm bottom-5 lg:px-16 flex items-stretch gap-12 text-white font-bold w-full'>
                <div className='hidden lg:flex gap-1'>
                    <h1>Navigation:</h1>
                    <ul className='flex gap-2 justify-start'>
                        {links.map((link) =>
                        (
                            <Link href={link.url} key={link.key}>
                                <li className='text-zinc-400 hover:text-primary duration-300'>{link.name}</li>
                            </Link>
                        )
                        )}
                    </ul>
                </div>
                <div className='flex gap-4 justify-center'>

                </div>
                <motion.div className='w-full  lg:static absolute bottom-2 left-0 text-center lg:flex gap-4 justify-end'>
                    <p>Made with <span className='text-primary'>❤</span> at <a href='https://khatoonadvertising.ir/' className='text-zinc-400 hover:text-primary duration-300'>Khatoon Advertising</a></p>
                </motion.div>
            </motion.div>

        </AnimatePresence>
    )
}
//  by <a href='https://emjayi.ir/' className='text-zinc-400 hover:text-primary duration-300'>Emjayi</a>
export default Footer