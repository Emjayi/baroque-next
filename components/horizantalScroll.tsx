'use client'
import ReactLenis from '@studio-freight/react-lenis'
import router from 'next/router'

const HorizantalScroll = ({ children }: any) => {
    return (
        <div className='overflow-hidden'>
            <ReactLenis
                root
                options={{ orientation: "horizontal", gestureOrientataion: "both" }}
            >
                {children}
            </ReactLenis>
        </div>

    )
}

export default HorizantalScroll