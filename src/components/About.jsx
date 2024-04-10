import React from 'react'
import about from '../assets/about.jpg'
import { MdArrowOutward } from "react-icons/md";

function About() {
    return (
        <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl xl:w-3/4 font-normal pl-10 lg:pl-16'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className='flex max-lg:flex-col max-lg:gap-5 justify-between items-start pt-6 max-md:px-8 px-14 w-full border-t-[1px] border-zinc-500 mt-20'>
                <div>
                    <h1 className='max-md:text-5xl text-6xl'>Our approach:</h1>
                    <button
                        className='uppercase max-md:text-sm flex gap-5 font-normal justify-between items-center max-md:px-5 max-md:py-2 px-8 py-3 mt-5 bg-zinc-900 hover:bg-black ease-in duration-100 text-white rounded-full'
                    >
                        read more
                        <div className='max-md:w-5 max-md:h-5 w-8 h-8 hover:text-black bg-white scale-[.3] hover:scale-150 ease-in duration-150 rounded-full flex justify-center items-center'>
                            <MdArrowOutward />
                        </div>
                    </button>
                </div>
                <div className='w-full lg:w-2/4'>
                    <img
                        src={about}
                        className='rounded-lg w-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default About