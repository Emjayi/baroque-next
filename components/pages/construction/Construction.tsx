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
const Construction = ({ images, id, name, url }: any) => {

    // Image loading effect
    const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#00000000" offset="20%" />
        <stop stop-color="#44444430" offset="50%" />
        <stop stop-color="#00000000" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#00000020" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;
    const toBase64 = (str: string) =>
        typeof window === "undefined"
            ? Buffer.from(str).toString("base64")
            : window.btoa(str);

    // State for hover and active states
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    return (
        <>
            {(images.construction) &&
                <motion.div
                    key={id}
                    className='text-white flex flex-col justify-center duration-300 w-[300px] md:w-[380px] hover:text-primary text-center'
                    whileHover={{ width: 900 }}
                    transition={{ duration: .4, ease: "easeInOut" }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <motion.div
                        className='bg-black z-50 py-[10px] tracking-widest text-center w-full font-bold text-white'>
                        <motion.h1 className={hovered && "text-primary"}>{name}</motion.h1>
                    </motion.div>

                    {/* Desktop View */}
                    <motion.div
                        className='hidden md:block md:w-full h-[85dvh]'>
                        <motion.div
                            className='image-container hidden md:block w-full h-[80dvh]'
                        >
                            <Swiper
                                navigation={hovered}
                                modules={[Keyboard, Navigation]} className="w-[900px] flex h-full bg-black/50">
                                {
                                    images.construction.map((image: any, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                                src={`/projects/${url}/construction/${image}`}
                                                layout='fill'
                                                alt={`Image ${index}`}
                                                className='items-center flex object-cover'
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </motion.div>
                    </motion.div>

                    {/* Mobile View */}
                    <motion.div
                        transition={{ duration: 1 }}
                        className='w-[300px] md:hidden'
                        onTouchStart={() => setHovered(true)}
                        onViewportLeave={() => setHovered(false)}
                    >
                        <motion.div
                            className='image-container md:block w-full h-[30dvh]'
                        >

                            <Swiper
                                className="w-[300px] flex h-full bg-black/50">
                                {
                                    images.construction.map((image: any, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                                src={`/projects/${url}/construction/${image}`}
                                                layout='fill'
                                                alt={`Image ${index}`}
                                                className='object-cover'
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </motion.div>
                    </motion.div>
                </motion.div>
            }
        </>
    );
};

export default Construction;
