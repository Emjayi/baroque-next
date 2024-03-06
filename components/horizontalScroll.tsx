'use client'
import ReactLenis from '@studio-freight/react-lenis'

const HorizontalScroll = ({ children }: any) => {
    return (
        <ReactLenis
            root
            options={{ orientation: "horizontal", gestureOrientataion: "both" }}
            classname=""
        >
            <div className=''>{children}</div>
        </ReactLenis>
    )
}

export default HorizontalScroll