import React from 'react'
import PageWrapper from '../../components/PageWrapper';
import { motion } from 'framer-motion';

const about = () => {

    return (
        <PageWrapper pageName='about'>
            <div className='flex w-[600px] h-[600px] items-center justify-center'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className='absolute -rotate-90 left-96 text-white w-52 text-2xl '>Where is Baroque?</motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className='text-white ml-24'>Here is the land of new opportunities and even a home where you can experience, learn, be supported, and in a word a place where you can live architecture. Doing professional and researching projects of architecture. Teaching architecture to young people, considering the lack of proper academic area in the north of Iran. Studying and providing innovative models to settle the shantytown and those who have been hurt by natural disasters. Designing fast-to-build houses for the times of emergency.Reviving and researching in architecture and local building techniques and preventing the local architecture from being faded into oblivion.</motion.p>
            </div>
        </PageWrapper>
    )
}

export default about

