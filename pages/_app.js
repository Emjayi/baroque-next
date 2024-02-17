import "./input.css"
import { AnimatePresence, motion } from 'framer-motion'
import Link from "next/link"
import { useState } from "react"


export default function App({ Component, pageProps, router }) {
    const [intro, setIntro] = useState(true);
    setTimeout(() => {
        setIntro(false)
    }, 3400);

    return (
        <div className=''>
            <AnimatePresence mode='wait'>
                <AnimatePresence>
                    {intro && <motion.div exit={{ opacity: 0 }} className='grid grid-cols-3 grid-rows-3 gap-0 place-items-center h-screen'>
                        <AnimatePresence>
                            {intro && (<><motion.div exit={{ opacity: 0 }} className='grid grid-cols-3 grid-rows-3 row-start-2 col-start-2'>
                                <motion.div
                                    animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }}
                                    transition={{ times: [0, .2, .6], duration: 1, repeat: Infinity, repeatDelay: .1 }}
                                    className='col-start-1 bg-primary w-[50px] h-[50px]'></motion.div>
                                <motion.div animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }} transition={{ times: [0, .4, .8], duration: 1, repeat: Infinity, repeatDelay: .1 }} className='col-start-3 bg-primary w-[50px] h-[50px]'></motion.div>
                                <motion.div initial={{ y: 0 }} animate={{ y: [-50, 50, 0, 0, 0, -50], x: [0, 0, 0, 50, -50, 0, 0] }} transition={{ times: [0, .5, 1], duration: 2, repeat: Infinity, repeatDelay: 1 }} className='col-start-2 row-start-2 bg-primary w-[25px] h-full'></motion.div>
                                <motion.div initial={{ y: 0 }} animate={{ y: [50, -50, 0, 0, 0, 50], x: [0, 0, 0, -50, 50, 0, 0] }} transition={{ times: [0, .5, 1], duration: 2, repeat: Infinity, repeatDelay: 1 }} className='col-start-2 row-start-2 bg-primary ml-[25px] w-[25px] h-full'></motion.div>
                                <motion.div animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }} transition={{ times: [0, .3, .6], duration: 1, repeat: Infinity, repeatDelay: .1 }} className='col-start-1 row-start-3 bg-primary w-full h-full'></motion.div>
                                <motion.div animate={{ backgroundColor: ["#D2AC72", "#ffffff", "#D2AC72"], opacity: [1, .5, 1] }} transition={{ times: [0, .3, .7], duration: 1, repeat: Infinity, repeatDelay: .1 }} className='col-start-3 row-start-3 bg-primary w-full h-full'></motion.div>
                            </motion.div>
                                <div className='row-start-3 col-start-2'><h1 className=' text-zinc-300 text-lg'>Loading...</h1></div></>)}
                        </AnimatePresence>
                        <AnimatePresence>
                            {!intro && <motion.div
                                className='row-start-2 col-start-2 h-screen w-screen'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            >

                            </motion.div>}
                        </AnimatePresence>
                    </motion.div>}
                </AnimatePresence>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
    )
}