import React, { useRef } from 'react'
import HorizantalScroll from '../../components/horizantalScroll'
import Image from 'next/image'
import bg from '../../public/fg-1.jpg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
const about = () => {
    // const container = useRef();
    // const tl: any = useRef();

    // const toggleTimeline = () => {
    //     tl.current.reversed(!tl.current.reversed());
    // };

    // useGSAP(
    //     () => {
    //         const boxes: any = gsap.utils.toArray('.box');
    //         const butt = '.button'
    //         const hh = 'h1'
    //         const last: any = gsap.utils.toArray('.last')
    //         gsap
    //             .timeline()
    //             .from(boxes[0], { x: 120, rotation: 360 })
    //             .from(boxes[1], { x: -120, rotation: -360 }, '<')
    //             .from(boxes[2], { y: -166 })
    //             .from(butt, { y: 300, opacity: 0 })
    //             .from(hh, { duration: 1, y: 300, opacity: 0 })
    //             .from(last[0],
    //                 {
    //                     duration: .5,
    //                     x: 300,
    //                     opacity: 0,
    //                     ease: "power2.inOut",
    //                     scrollTrigger: {
    //                         trigger: last,
    //                         start: "top 150%",
    //                         end: "right 50%",
    //                         scrub: true,
    //                         pin: true,
    //                     },
    //                 })
    //             .from(last[1],
    //                 {
    //                     duration: .5,
    //                     y: -300,
    //                     opacity: 0,
    //                     ease: "power2.inOut",
    //                     scrollTrigger: {
    //                         trigger: last,
    //                         start: "top 150%",
    //                         end: "right 50%",
    //                         scrub: true,
    //                         pin: true,
    //                     },
    //                 })
    //             .from(last[2],
    //                 {
    //                     duration: .5,
    //                     x: -300,
    //                     opacity: 0,
    //                     ease: "power2.inOut",
    //                     scrollTrigger: {
    //                         trigger: last,
    //                         start: "top 150%",
    //                         end: "right 50%",
    //                         scrub: true,
    //                         pin: true,
    //                     },
    //                 })
    //     },
    //     { scope: container }
    // );// <-- automatically reverted
    return (
        <><div className='bg'></div><div className='flex h-[99vh] items-center'>
            <div className='flex h-[90vh] items-center gap-5 px-8 border-r-0 border-l-0 text-white text-6xl border-white border-2'>
                <h1 className=' text-yellow-600 mr-[4em]'>Team</h1>

                <HorizantalScroll>

                    <div className=' flex items-center border-black border-4 rounded-md '>
                        <div className="box p-10 gradient-blue">1</div>
                        <div className="box p-10 gradient-blue">2</div>
                        <div className="box p-10 gradient-blue">3</div>
                        <div className='last h-full w-[20em]'><Image src={bg} alt={"team Picture"} className='image max-h-[78vh] -z-10 object-cover' /></div>
                    </div>
                </HorizantalScroll>
            </div>
        </div></>
    )
}

export default about

