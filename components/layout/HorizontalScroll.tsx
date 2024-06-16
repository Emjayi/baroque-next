'use client'
import ReactLenis from '@studio-freight/react-lenis'

const HorizontalScroll = ({ children }: any) => {
    return (
        <ReactLenis
            isHorizontal={true}
            root
            options={{ orientation: "horizontal", gestureOrientation: "both" }}
        >
            {children}
        </ReactLenis>
    )
}

export default HorizontalScroll