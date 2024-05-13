import { motion } from 'framer-motion'
import React from 'react'

const AboutMap = () => {
    return (
        <div className='flex text-white text-lg w-[800px] flex-col items-center justify-center h-screen px-16'>
            <iframe
                title="google map"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=36.32456491082329,59.49922800064087+(Baroque)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="500"
                style={{}}
                loading="lazy"

            ></iframe>
            {/* <iframe width="100%" height="600" src={`https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=36.32456491082329,59.49922800064087+(Baroque)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`}></iframe> */}
        </div >
    )
}

export default AboutMap