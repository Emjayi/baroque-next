import React from 'react'
import HorizantalScroll from '../../components/horizantalScroll';
import Image from 'next/image';
import bg from '/public/fg-1.jpg'
import { motion } from 'framer-motion';

const index = () => {
    return (
        <><div className='bg'></div><div className='flex h-[99vh] items-center'>
            <div className='flex h-[90vh] items-center gap-5 border-r-0 border-l-0 text-white text-6xl'>
                <motion.div
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='bg-white/50 fixed z-50 h-screen top-0 grid grid-cols-1 items-center px-50'>

                        <div className='w-12'>
                            <h1 className=' text-zinc-700 text-[.6em] w-44 -ml-16 absolute -rotate-90'>Our team</h1>
                        </div>
                    </div>
                </motion.div>


                <HorizantalScroll>

                    <div className=' flex items-center rounded-md '>
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <div className='h-screen object-fill w-[26em]'><Image src={bg} alt={"team Picture"} className='h-[105vh] w-full object-fill -z-10' /></div>
                        </motion.div>
                    </div>
                    <div className=' flex items-center rounded-md '>
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <div className='h-screen object-fill w-[26em]'><Image src={bg} alt={"team Picture"} className='h-[105vh] w-full object-fill -z-10' /></div>
                        </motion.div>
                    </div>
                </HorizantalScroll>
            </div>
        </div></>
    )
}

export default index