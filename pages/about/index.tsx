import { motion } from 'framer-motion'
import React from 'react'
import Inner from '../../components/Inner'
import Menu from '../../components/menu'
import HorizantalScroll from '../../components/horizantalScroll'
import Image from 'next/image'

const index = () => {
    return (
        <div className='flex h-[99vh] items-center'>
            <div className=' flex h-[80vh] items-center gap-5 px-8 border-4 border-white text-white text-6xl'>
                <h1 className='text-red-600'>Home</h1>
                <HorizantalScroll>
                    <div className='w-[300em] border-black border-4 rounded-md '>
                        <Image src={"/fg-1.jpg"} width={1200} height={600} alt={"team Picture"} className='max-h-[78vh] -z-10' />
                    </div>
                </HorizantalScroll>
            </div>
        </div>
    )
}

export default index