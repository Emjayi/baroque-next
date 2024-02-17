import React, { useState } from 'react'
import Menu from '../../components/menu'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
    hidden: {
        opacity: [1, 1, 0.3, 0.3, 0],
        y: [0, -10, 50, 50, 50],
        x: [0, 0, 0, 0, -60],
        transition: {
            duration: 0.85,
            times: [0, 0.25, 0.6, 0.76, 1],
            ease: ["circOut", "circIn", "linear", "easeIn"]
        },
        transitionEnd: {
            x: 10,
            y: -60,
            opacity: 0
        }
    },

    visible: {
        opacity: [0, 0, 0.9, 0.9, 1],
        y: [-60, -60, 0, 0, 0],
        x: [20, 20, 20, 20, 0],
        transition: {
            duration: 0.85,
            ease: ["circOut", "circIn", "linear", "easeIn"],
            times: [0, 0.25, 0.6, 0.76, 1]
        },
        transitionEnd: {
            y: 0,
            x: 0,
            opacity: 1
        }
    }
};
const index = () => {


    const [open, setOpen] = useState(false);

    const [intro, setIntro] = useState(true);
    setTimeout(() => {
        setIntro(false)
    }, 4000)

    return (
        <div className='grid grid-cols-3 grid-rows-3 gap-0 place-items-center h-screen'>
            {/* <motion.div
                className='fixed flex justify-center items-center h-screen w-screen z-0 bg-primary'
                variants={variants}
                onClick={() => setOpen(!open)}
                initial={{}}
                animate={open ? "visible" : "hidden"}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <motion.div
                    initial={{}}
                    className='p-8 w-full bg-white'

                >

                </motion.div>
            </motion.div>
            <motion.div
                className="fixed left-auto top-auto"
                onClick={() => setOpen(!open)}
                variants={variants}
                initial={{ opacity: 0 }}
                animate={open ? "visible" : "hidden"}
                style={{
                    color: "#bf4d00"
                }}
            >
                <button className='bg-white text-primary z-10 p-4 text-2xl'>close</button>
            </motion.div>
            <motion.div
                className="fixed left-auto top-auto"
                onClick={() => setOpen(!open)}
                variants={variants}
                initial={{ opacity: 1 }}
                animate={open ? "hidden" : "visible"}
                style={{
                    color: "#bf4d00"
                }}
            >
                <button className='bg-primary text-white z-10 p-4 text-2xl'>Menu</button>
            </motion.div> */}
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
            {/* <motion.div
                initial={{}}
                animate={{ backgroundColor: "#ffffff" }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className='h-14 w-2 bg-primary fixed left-[48vw] right-auto'></motion.div>
            <motion.div
                initial={{}}
                animate={{ backgroundColor: "#ffffff" }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className='h-14 w-2 bg-primary fixed right-[48vw]'></motion.div>
            <motion.div
                initial={{}}
                animate={{ backgroundColor: "#ffffff" }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className='h-2 w-12 bg-primary fixed top-[46.1vh]'></motion.div>
            <motion.div
                initial={{}}
                animate={{ backgroundColor: "#ffffff" }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className='h-2 w-12 bg-primary fixed bottom-[46.1vh]'></motion.div>
            <motion.div
                initial={{}}
                animate={open ? { height: "15vh", border: "10px", borderColor: "white" } : {}}
                transition={open ? { duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } : { duration: 2 }}
                className='h-10 w-54 border-4 rounded-8 border-primary bg-primary fixed '></motion.div> */}
            {/* <button className='fixed bottom-[25vh] text-white bg-primary rounded-8 px-4 py-2' onClick={() => setOpen(!open)}>Enter</button> */}
        </div>
    )
}

export default index