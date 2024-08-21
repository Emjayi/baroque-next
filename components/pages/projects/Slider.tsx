import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Keyboard, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Slider = ({ project }) => {

    const [hovered, setHovered] = useState(false)
    const ref = useRef(null);
    const prevRef = useRef(null); // Ref for the previous button
    const nextRef = useRef(null); // Ref for the next button

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

    const [type, setType] = useState("all")

    return (
        <>
            <div className='w-[100dvw] z-40 flex h-[100dvh]' ref={ref} style={{ cursor: 'none' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {(project.images.art || project.images.plan) &&
                    <motion.div
                        className=''
                        onMouseEnter={() => setHovered(false)}
                        onMouseLeave={() => setHovered(true)}
                    >
                        <motion.div
                            className='hidden md:flex flex-col z-50 absolute top-[7dvh] right-0'
                            transition={{ duration: .6 }}
                        >
                            <div className='flex z-50 bg-black/50 text-white text-md'>
                                {(project.images.plan || project.images.art) && <button onClick={() => setType("all")} className='w-16 text-center hover:bg-black/20 duration-300 p-2'>All</button>}
                                <button onClick={() => setType("real")} className='w-16 text-center hover:bg-black/20 duration-300 p-2'>Real</button>
                                {project.images.art && <button onClick={() => setType("art")} className='w-16 text-center hover:bg-black/20 duration-300 p-2'>3D</button>}
                                {project.images.plan && <button onClick={() => setType("plan")} className='w-16 text-center hover:bg-black/20 duration-300 p-2'>Plan</button>}
                            </div>
                        </motion.div>
                        <motion.div
                            className='md:hidden flex flex-col z-50 absolute top-[10dvh] right-0'
                            animate={hovered ? { translateY: 0 } : { translateY: -40 }}
                            transition={{ duration: .6 }}
                        >
                            <div className='flex flex-col z-50 bg-black/50 text-white text-lg'>
                                <button onClick={() => setType("real")} className='w-20 text-center hover:bg-black/20 duration-300 p-2'>Real</button>
                                {project.images.art && <button onClick={() => setType("art")} className='w-20 text-center hover:bg-black/20 duration-300 p-2'>3D</button>}
                                {project.images.plan && <button onClick={() => setType("plan")} className='w-20 text-center hover:bg-black/20 duration-300 p-2'>Plan</button>}
                            </div>
                        </motion.div>
                    </motion.div>}
                <Swiper
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    keyboard={true}
                    modules={[Keyboard, Navigation]} className="w-[100dvw] flex h-full">
                    {(type === "all") &&
                        project.images.all.map((image: any, index: number) => (
                            <SwiperSlide key={100 + index}>
                                <div
                                    className='w-full h-full bg-cover'
                                >
                                    <div
                                        className='h-full w-full bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30
                                '>
                                        <Image
                                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                            src={`/projects/${project.url}/${image}`}
                                            fill
                                            loading='lazy'
                                            sizes='(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 100vw'
                                            alt={`Image ${index}`}
                                            className='items-center flex object-contain'
                                        />
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))
                    }
                    {(type === "real") &&
                        project.images.real.map((image: any, index: number) => (
                            <SwiperSlide key={10 + index}>
                                <div
                                    className='w-full h-full bg-cover'
                                // style={{ backgroundImage: `url("/projects/${project.url}/${image}")` }}
                                >
                                    <div
                                        className='h-full w-full bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30
                                '>
                                        <Image
                                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                            src={`/projects/${project.url}/${image}`}
                                            fill
                                            loading='lazy'
                                            sizes='(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 100vw'
                                            alt={`Image ${index}`}
                                            className='items-center flex object-contain'
                                        />
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))
                    }
                    {(type === "art") &&
                        project.images.art.map((image: any, index: number) => (
                            <SwiperSlide key={200 + index}>
                                <div
                                    // style={{ backgroundImage: `url("/projects/${project.url}/${image}")` }}
                                    className='w-full h-full bg-cover'>
                                    <div className='h-full w-full bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
                                        <Image
                                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                            src={`/projects/${project.url}/${image}`}
                                            fill
                                            loading='lazy'
                                            sizes='(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 100vw'
                                            alt={`Image ${index}`}
                                            className='items-center flex object-contain'
                                        />
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))
                    }
                    {(type === "plan") &&
                        project.images.plan.map((image: any, index: number) => (
                            <SwiperSlide key={300 + index}>
                                <div
                                    className='w-full h-full bg-cover bg-blend-saturation'>
                                    <div
                                        className='h-full w-full bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30
                                '>
                                        <Image
                                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                            src={`/projects/${project.url}/${image}`}
                                            fill
                                            loading='lazy'
                                            sizes='(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 100vw'
                                            alt={`Image ${index}`}
                                            className='items-center flex object-contain'
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {/* <div className='fixed w-[100dvw] z-[1000] flex h-[100dvh]' ref={ref}> */}
                {/* Your Swiper and other components */}

                <div
                    ref={prevRef}
                    className='swiper-button-prev'
                    style={hovered ? { position: 'fixed', display: 'none', transition: '0s', cursor: 'none' } : { opacity: 0, transition: '0s' }}
                />
                <div
                    ref={nextRef}
                    className='swiper-button-next'
                    style={hovered ? { position: 'fixed', display: 'none', transition: '0s', cursor: 'none' } : { opacity: 0, transition: '0s' }}
                />
                {/* </div> */}
            </div >
        </>
    )
}

export default Slider
