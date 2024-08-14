import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';
import { Keyboard, Navigation, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { X } from 'lucide-react';

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
    const [imageIsOpen, setImageOpen] = useState(false)
    const handleImageOpening = () => {
        setImageOpen(!imageIsOpen)
    }
    return (
        <>
            {(images.construction) &&
                <motion.div
                    key={id}
                    className='text-white flex flex-col justify-center duration-300 w-[300px] md:w-[380px] text-center'
                    whileHover={{ width: 900 }}
                    transition={{ duration: .4, ease: "easeInOut" }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <motion.div
                        className='bg-black hidden lg:block z-40 py-[10px] tracking-widest text-center w-full font-bold text-white'>
                        <motion.h1 className={hovered && "text-primary"}>{name}</motion.h1>
                    </motion.div>
                    <motion.div
                        className='bg-black z-40 lg:hidden block py-[10px] tracking-widest text-center w-full font-bold text-white'>
                        <motion.h1 whileInView={{ color: "#D2AC72" }} transition={{ duration: .3, delay: .4 }}>{name}</motion.h1>
                    </motion.div>

                    {/* Desktop View */}
                    <motion.div
                        className='hidden md:block md:w-full hover:text-primary h-[85dvh]'>
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
                                                src={`/projects/${url}/${image}`}
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
                        className='w-[300px] block lg:hidden'
                    >
                        <motion.button
                            whileInView={{ backgroundColor: "#D2AC72" }}
                            whileFocus={{ backgroundColor: "#000" }}
                            transition={{ duration: .3, delay: .2 }}
                            onClick={handleImageOpening} className='absolute bottom-14 ml-12 inline-block px-3 py-4 duration-300 hover:bg-black bg-black/60 text-white'>View more</motion.button>
                        <motion.div
                            className='w-[300px] max-h-[100dvh]'
                            onClick={handleImageOpening}
                        >
                            <Image
                                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                src={`/projects/${url}/${images.construction[0]}`}
                                width={500}
                                height={500}
                                alt={`${name}'s construction`}
                                className='object-cover w-[300px] h-[90dvh]'
                            ></Image>
                        </motion.div>
                        <AnimatePresence>
                            {imageIsOpen &&
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className='fixed right-0 h-[100dvh] flex justify-center items-center w-screen z-50 top-0 bg-black/80'>
                                    <motion.button
                                        className='text-white bg-black/40 p-3 border-white right-4 fixed z-50 top-[8dvh] '
                                        onClick={handleImageOpening}
                                    >
                                        <X width={25} height={25} />
                                    </motion.button>
                                    <Swiper
                                        className=""
                                        zoom={true}
                                        modules={[Zoom, Keyboard, Navigation]}>
                                        {images.construction.map((image: any, index) => (
                                            <SwiperSlide key={index}>
                                                <Image
                                                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                                    src={`/projects/${url}/construction/${image}`}
                                                    width={500}
                                                    height={500}
                                                    alt={`Image ${index}`}
                                                    className='object-contain min-w-screen min-h-[100dvh]' />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </motion.div>}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            }
        </>
    );
};

export default Construction;
