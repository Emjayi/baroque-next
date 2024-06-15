import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

// List of menu links
const links = [
    { key: 1, name: 'Home', url: '/', speed: 0.1, length: -50 },
    { key: 2, name: 'Team', url: '/team', speed: 0.1, length: -50 },
    { key: 3, name: 'Construction', url: '/construction', speed: 0.2, length: -10 },
    { key: 4, name: 'Projects', url: '/projects', speed: 0.1, length: +50 },
    { key: 5, name: 'About', url: '/about', speed: 0.2, length: -50 }
];
const Footer = () => {

    const path = usePathname()

    return (

        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100, transition: { delay: 0, duration: .9 } }}
            transition={{ duration: 1, type: "spring", stiffness: 25, damping: 10, delay: 2.2 }}
            className='fixed flex py-4 justify-center bg-black/50 text-[12px] text-sm bottom-0 lg:px-16 items-stretch gap-12 text-white font-bold w-full z-20'>
            <div className='flex gap-3'>
                <ul className='flex gap-2 md:justify-start'>
                    {links.map((link) =>
                    (
                        <Link href={link.url} key={link.key} className={(link.url === path) ? 'text-primary' : 'text-zinc-400'}>
                            <li className=' hover:text-primary hover:-translate-y-1 duration-300'>{link.name}</li>
                        </Link>
                    )
                    )}
                </ul>
            </div>
            <div className='flex gap-4 justify-center'>

            </div>
            <motion.div className='w-full hidden md:flex lg:static absolute bottom-2 left-0 text-center gap-2 justify-end'>
                <p>Handcrafted with <span className='text-primary'>❤</span> at <a href='https://khatoonadvertising.ir/' className='text-zinc-400 hover:text-primary duration-300'>Khatoon Advertising</a></p>
                <p>by <a href='https://emjayi.liara.run/' className='text-zinc-400 hover:text-primary duration-300'>Emjayi</a></p>
            </motion.div>
        </motion.div >
    )
}
//  by <a href='https://emjayi.ir/' className='text-zinc-400 hover:text-primary duration-300'>Emjayi</a>
export default Footer