import { AnimatePresence, motion, useAnimate, stagger } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

// Construction component
const Construction = ({ id, name, alt, url, blur, mainImage, status, allImages, type, year }: any) => {
    // State for hover and active states
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    return (
        <motion.div
            key={id}
            className='text-white duration-300 w-[300px] md:w-[380px] hover:text-primary text-center'
            whileHover={{ width: 900 }}
            transition={{ duration: .4, ease: "easeInOut" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div
                // initial={{ height: "40px" }}
                // animate={hovered ? { y: 0, opacity: 1, backgroundColor: '#00000090', height: ["40px", "40px", "100px"], color: "#999999" } : { height: [null, "40px", "40px"] }}
                // exit={{ height: "40px", transition: { delay: 0, duration: .2 } }}
                // transition={{ duration: 1, times: [0, 0.5, 1], ease: "easeInOut" }}
                className='bg-black/10 relative top-0 z-50 py-2 tracking-widest text-center md:w-full w-full font-bold text-white'>
                <motion.h1 className={hovered && "text-primary"}>{name}</motion.h1>
                {/* Show additional info on hover */}
                {/* <AnimatePresence>
                    {hovered &&
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20, transition: { delay: .2 } }}
                            transition={{ duration: .5, delay: .6 }}
                            className='text-white/80'
                        >
                            <motion.h1>{status}</motion.h1>
                            <motion.h1>{year}</motion.h1>
                        </motion.div>}
                </AnimatePresence> */}
            </motion.div>

            {/* Desktop View */}
            <motion.div
                className='hidden md:block md:w-full h-[80vh]'>
                <motion.div
                    className='image-container hidden md:block w-full h-[80vh]'
                >

                    <Swiper
                        navigation={hovered && true}
                        modules={[Keyboard, Navigation]} className="w-[900px] flex h-full bg-black/30">
                        {/* {
                            allImages.map((image: any, index) => (
                                <SwiperSlide key={index + 1}>
                                    <Image
                                        src={`/projects/${name}/${image}`}
                                        width={1500}
                                        height={1500}
                                        loader={s}
                                        alt={`Image ${index + 1}`}
                                        className='items-center flex object-cover'
                                    />
                                </SwiperSlide>
                            ))
                        } */}
                        <SwiperSlide>
                            <Image
                                src={`/projects/baroque 7/01.jpg`}
                                width={1500}
                                height={1500}
                                alt={`Image 1`}
                                className='items-center flex object-cover'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={`/projects/baroque 7/02.jpg`}
                                width={1500}
                                height={1500}
                                alt={`Image 1`}
                                className='items-center flex object-cover'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={`/projects/baroque 7/03.jpg`}
                                width={1500}
                                height={1500}
                                alt={`Image 1`}
                                className='items-center flex object-cover'
                            />
                        </SwiperSlide>
                    </Swiper>
                    {/* Animated info box */}
                </motion.div>

            </motion.div>



            {/* Mobile View */}
            <motion.div
                transition={{ duration: 1 }}
                className='w-[300px] h-[70vh] md:hidden'
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <Image
                    src={mainImage}
                    width={250}
                    height={400}
                    alt={alt}
                    className='object-cover w-[300px] h-[70vh] grayscale hover:grayscale-0 duration-1000' />
            </motion.div>
        </motion.div>
    );
};

export default Construction;
