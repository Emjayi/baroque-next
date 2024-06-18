import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Keyboard, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Slider = ({ project }) => {
    const [hovered, setHovered] = useState(false)

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

    const [type, setType] = useState("real")

    return (
        <>
            <div className='w-[100dvw] z-40 flex h-[100dvh]'>
                {(project.images.art || project.images.plan) &&
                    <motion.div
                        className=''>
                        <motion.div
                            className='hidden md:flex flex-col z-50 absolute top-[7dvh] right-0'
                            transition={{ duration: .6 }}
                        >
                            <div className='flex z-50 bg-black/50 text-white text-md'>
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
                            {/* <div className='w-full z-50 text-center text-bold uppercase tracking-widest py-4 bg-black/70 text-white'>Image Type</div> */}
                        </motion.div>
                    </motion.div>}
                <Swiper
                    navigation={true}
                    keyboard={true}
                    modules={[Keyboard, Navigation]} className="w-[100dvw] flex h-full">
                    {(type === "real") &&
                        project.images.real.map((image: any, index: number) => (
                            <SwiperSlide key={100 + index}>
                                <div
                                    className='w-full h-full bg-cover'
                                    style={{ backgroundImage: `url("/projects/${project.url}/${image}")` }}>
                                    <div
                                        className='h-full w-full bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60
                                '>
                                        <Image
                                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                            src={`/projects/${project.url}/${image}`}
                                            layout='fill'
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
                                    style={{ backgroundImage: `url("/projects/${project.url}/3d/${image}")` }}
                                    className='w-full h-full bg-cover'>
                                    <div className='h-full w-full bg-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg'>
                                        <Image
                                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                            src={`/projects/${project.url}/3d/${image}`}
                                            layout='fill'
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
                                    className='w-full h-full bg-cover bg-blend-saturation'
                                    style={{ backgroundImage: `url("/projects/${project.url}/plan/${image}")` }}>
                                    <div
                                        className='h-full w-full bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60
                                '>
                                        <Image
                                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                            src={`/projects/${project.url}/plan/${image}`}
                                            layout='fill'
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
            </div >
        </>
    )
}

export default Slider
