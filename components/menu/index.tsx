import Link from 'next/link'
import React, { useState } from 'react'
import Inner from '../Inner'

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <Inner>
            <button onClick={() => setOpen(!open)}>
                Enter
            </button>
            <div className='h-screen z-100'>
                <div className='header flex gap-2 justify-center text-white font-bold'>
                    <Link href="/" className='p-2'>Home</Link>
                    <Link href="/about" className='p-2'>About</Link>
                    <Link href="/contact" className='p-2'>Contact</Link>
                </div>
            </div>
        </Inner>
    )
}

export default Menu