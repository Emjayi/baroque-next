import Link from 'next/link'
import React, { useState } from 'react'
import Inner from '../Inner'

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=' flex flex-col'>
            <button onClick={() => setOpen(!open)} className='text-6xl text-zinc-200 font-bold justify-center text-center'>
                Enter
            </button>
            <div >
                {open && // If is open display the menu
                    <Inner>
                        <div className='absolute top-[-125px] text-6xl text-zinc-200 flex justify-around flex-col w-full h-screen bg-black bg-opacity-95 duration-200'>
                            <div className='header flex gap-2 justify-center flex-col items-center font-bold'>
                                <Link href="/" className='p-2 hover:text-zinc-500 duration-200'>Home</Link>
                                <Link href="/about" className='p-2 hover:text-zinc-500 duration-200'>About</Link>
                                <Link href="/contact" className='p-2 hover:text-zinc-500 duration-200'>Contact</Link>
                            </div>
                            <button onClick={() => setOpen(!open)} className='hover:text-zinc-500 duration-200 font-bold justify-center text-center'>
                                Close
                            </button>
                        </div>
                    </Inner>
                }
            </div>

        </div >
    )
}

export default Menu