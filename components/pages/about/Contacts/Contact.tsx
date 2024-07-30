import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Link from 'next/link'

const Contact = ({ icon, title, desc, url, id }: { title: string, desc: string, url: any, icon: any, id: number }) => {
    const [isHover, setHover] = useState(false)
    return (
        <Link
            key={id}
            href={url}>
            <motion.div
                initial={{ opacity: .1, x: 0 }}
                whileInView={{ opacity: 1, x: 10 }} transition={{ delay: .4 }} className='m-1 gap-4 cursor-pointer md:duration-200 px-2 py-4 flex justify-start items-center'
                onMouseEnter={() => (setHover(true))}
                onMouseLeave={() => (setHover(false))}>
                <div className={!isHover ? ` flex justify-start items-center opacity-25 duration-500` : ' flex justify-center items-center opacity-75 duration-500'}>{icon}</div>
                <motion.div className='block md:hidden'>
                    <h1 className={isHover ? '' : ' '}>{title}</h1>
                    <p className={isHover ? 'text-primary/90' : ''}>{desc}</p>
                </motion.div>
                <motion.div className='hidden md:block'>
                    <h1 className={isHover ? 'duration-500 text-[25px] tracking-[5px] text-text-zinc-300' : ' tracking-normal text-[25px] text-zinc-500 duration-500'}>{title}</h1>
                    <p className={isHover ? 'text-[18px] text-primary/90 duration-200 w-48' : 'text-[16px] text-zinc-300 duration-200 w-48'}>{desc}</p>
                </motion.div>
            </motion.div>
        </Link>
    )
}

export default Contact