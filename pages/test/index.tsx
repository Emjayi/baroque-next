import React from 'react'
import HorizontalScroll from '../../components/layout/HorizontalScroll'

const index = () => {
    return (
        <HorizontalScroll>
            <div className='max-h-[200px] w-[2000dvw] flex items-center justify-center'>
                <div className='w-[150vw] flex'>
                    <h1 className='text-white text-xl'>hello world</h1>
                    <h1 className='text-white text-xl'>hello world</h1>
                    <h1 className='text-white text-xl'>hello world</h1>
                    <h1 className='text-white text-xl'>hello world</h1>
                    <h1 className='text-white text-xl'>hello world</h1>
                    <h1 className='text-white text-xl'>hello world</h1>
                    <h1 className='text-white text-xl'>hello world</h1>
                </div>
            </div>
        </HorizontalScroll>
    )
}

export default index
