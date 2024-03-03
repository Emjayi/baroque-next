import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/2.svg'
import logo2 from '../../public/3.svg'
import { LampContainer, LampDemo } from '../ui/lamp';

export default function Logo() {
    return (
        <AnimatePresence mode='wait'>

            {/* <motion.div
                initial={{}}
                className='fixed flex -z-10 justify-center items-center h-screen w-screen text-white'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ fill: '#fff' }}
                    transition={{ duration: 2 }}
                >
                    <Image src={logo} className='' alt='logo'></Image>
                </motion.div>
            </motion.div> */}

        </AnimatePresence>
    );
}
