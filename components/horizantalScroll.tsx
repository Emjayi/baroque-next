'use client'
import ReactLenis from '@studio-freight/react-lenis'

const HorizantalScroll = ({ children }: any) => {
    return (
        <ReactLenis
            root
            options={{ orientation: "horizontal", gestureOrientataion: "both" }}
            classname=""
        >
            <div className='flex'>{children}</div>
        </ReactLenis>
    )
}

export default HorizantalScroll