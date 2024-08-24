import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Keyboard, Navigation, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { X } from 'lucide-react';

// Construction component
const Construction = ({ images, id, name, url }: any) => {


    const [hovered, setHovered] = useState(false)
    const ref = useRef(null);
    const prevRef = useRef(null); // Ref for the previous button
    const nextRef = useRef(null); // Ref for the next button
    const [imageIsOpen, setImageOpen] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const windowWidth = ref.current ? ref.current.offsetWidth : window.innerWidth;
            const containerRect = ref.current?.getBoundingClientRect();

            if (prevRef.current && nextRef.current && containerRect && hovered) {
                if (mouseX < containerRect.left + windowWidth / 2) {
                    prevRef.current.style.display = 'block';
                    nextRef.current.style.display = 'none';
                    prevRef.current.style.left = `${mouseX}px`;
                    prevRef.current.style.top = `${mouseY}px`;
                } else {
                    prevRef.current.style.display = 'none';
                    nextRef.current.style.display = 'block';
                    nextRef.current.style.left = `${mouseX}px`;
                    nextRef.current.style.top = `${mouseY}px`;
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [hovered]);

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
    const [active, setActive] = useState(false);

    const handleImageOpening = () => {
        setImageOpen(!imageIsOpen)
    }
    return (
        <>

            {(images.construction) &&
                <motion.div
                    key={id}
                    className='text-white flex flex-col justify-center duration-500 w-[300px] md:w-[380px] mr-10 text-center cursor-none'
                    whileHover={{ width: 800 }}
                    transition={{ duration: .4, ease: "easeInOut" }}
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
                        className='hidden md:block md:w-full hover:text-primary h-[85dvh]'
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}>

                        <motion.div
                            className='image-container hidden md:block w-full h-[80dvh] cursor-none'
                        >
                            <Swiper
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                ref={ref}
                                spaceBetween={50}
                                modules={[Navigation]} className={"w-[800px] flex h-full items-center justify-center place-content-center bg-black/50 cursor-none"}>
                                {
                                    images.construction.map((image: any, index: number) => (
                                        <SwiperSlide key={index} className='flex items-s justify-start'>
                                            <Image
                                                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                                src={`/projects/${url}/${image}`}
                                                width={1600}
                                                height={1200}
                                                loading='lazy'
                                                alt={`Image ${index}`}
                                                className={!hovered ? 'flex h-[120%] w-[160%] scale-[1.3] duration-[1s] object-left-top object-scale-down' : 'flex w-full h-full items-center justify-center place-content-center duration-[2s] object-scale-down'}
                                            />

                                        </SwiperSlide>
                                    ))
                                }
                                <div
                                    ref={prevRef}
                                    className='swiper-button-prev cursor-none'
                                    style={hovered ? { position: 'fixed', display: 'none', transition: '0s', cursor: 'none' } : { opacity: 0, transition: '0s' }}
                                />
                                <div
                                    ref={nextRef}
                                    className='swiper-button-next cursor-none'
                                    style={hovered ? { position: 'fixed', display: 'none', transition: '0s', cursor: 'none' } : { opacity: 0, transition: '0s' }}
                                />
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
                                loading='lazy'
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
                                        {images.construction.map((image: any, index: number) => (
                                            <SwiperSlide key={index}>
                                                <Image
                                                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                                    src={`/projects/${url}/${image}`}
                                                    width={500}
                                                    height={500}
                                                    loading='lazy'
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
