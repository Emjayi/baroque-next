import { motion, useScroll } from 'framer-motion'
import React from 'react'
import Inner from '../../components/Inner'
import Menu from '../../components/menu'
import HorizantalScroll from '../../components/horizantalScroll'

const index = () => {
    return (
        <div className='items-center'>
            <div className='table bg-gray-700'>
                <Menu />
                <div className='border-4 overflow-y-auto border-gray-200 p-4'>
                    <HorizantalScroll />
                </div>
            </div>
        </div>
    )
}

export default index