import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
    return (
        <div
            data-scroll
            data-scroll-speed=".2"
            data-scroll-section
            className='w-full rounded-tr-3xl rounded-tl-3xl py-20 bg-[#004D43]'
        >
            <div className='text w-full border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
                <motion.h1
                    className='text-[15vw] tracking-tighter leading-none font-founders-grotesk pr-20 font-bold uppercase'
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: 'linear', duration: 5, repeat: Infinity }}
                >
                    we are ochi
                </motion.h1>
                <motion.h1
                    className='text-[15vw] tracking-tighter leading-none font-founders-grotesk pr-20 font-bold uppercase'
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: 'linear', duration: 5, repeat: Infinity }}
                >
                    we are ochi
                </motion.h1>
            </div>
        </div>
    )
}

export default Marquee