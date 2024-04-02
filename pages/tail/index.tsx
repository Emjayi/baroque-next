import React from 'react'

const Tail = () => {
    return (
        <div
            className='h-screen w-screen grid grid-cols-3 lg:grid-cols-5 gap-[5px] text-white text-lg text-center'>
            <div className='col-span-1 hidden lg:block order-2 lg:order-1 container border-2 border-white'><h1>Left</h1></div>
            <div className='w-screen lg:col-span-3 order-1 lg:order-2 lg:container border-2 border-white'><h1>Center</h1></div>
            <div className='col-span-1 hidden lg:block order-3 lg:order-3 container border-2 border-white'><h1>Right</h1></div>
        </div>
    )
}

export default Tail