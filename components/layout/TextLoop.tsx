import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { cn } from '../../utils/cn';

const TextLoop = ({ titles, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000); // Change this interval to control the timing between transitions

        return () => clearInterval(intervalId);
    }, [titles]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { delay: 0 } }}
            transition={{ delay: 2.5, duration: .5 }}
            className='w-screen h-screen'
        >
            <AnimatePresence>
                <motion.h2
                    key={titles[currentIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: .3, delay: 1 } }}
                    transition={{ duration: 1, delay: 1 }}
                    className={cn(' ', className)}
                >
                    <AnimatedText delay={1} duration={1} text={titles[currentIndex]} className='' />
                </motion.h2>
            </AnimatePresence>
        </motion.div>
    );
};

export default TextLoop;
