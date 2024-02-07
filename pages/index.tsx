import React from 'react'
import Image from 'next/image'
import Inner from '../components/Inner'
import Menu from '../components/menu'
import ReactLenis from '@studio-freight/react-lenis'
import HorizantalScroll from '../components/horizantalScroll'
import teamPic from "public/fg-1.jpg"

const App = () => {
    return (
        <Inner>
            <div className=' flex h-[80vh] items-center gap-5 px-8 border-4 border-white mx-10 text-white text-6xl'>
                <h1 className='text-red-600'>Home</h1>
                <HorizantalScroll>
                    <div className='w-[300em] border-black border-4 rounded-md '>
                        <Image src={"/fg-1.jpg"} width={1200} height={600} alt={"team Picture"} className='max-h-[78vh] -z-10' />
                    </div>
                </HorizantalScroll>
            </div>
        </Inner>
    )
}

export default App