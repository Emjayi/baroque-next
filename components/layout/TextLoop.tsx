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
        >
            <AnimatePresence>
                <motion.h2
                    key={titles[currentIndex]}
                    initial={{ opacity: 0, x: 0, color: "#ffffff" }}
                    animate={{ opacity: 1, x: 0, color: "#D2AC72" }}
                    exit={{ opacity: [1, 1, 0, 0], color: "#ffffff50", x: 0, transition: { duration: 1.6 } }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className={cn(' relative', className)}
                >
                    <AnimatedText delay={1.6} duration={.6} text={titles[currentIndex]} className='' />
                    {/* <h2>{titles[currentIndex]}</h2> */}
                </motion.h2>
            </AnimatePresence>
        </motion.div>
    );
};

export default TextLoop;
