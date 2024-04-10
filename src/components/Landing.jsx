import React, { useEffect, useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import MainLogo from "../assets/main-logo.jpeg";
import { motion } from 'framer-motion';

const Landing = () => {

    const [isTrue, setisTrue] = useState(false);
    const [forDiv, setForDiv] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setisTrue(true);
    //     }, [1000])
    //     setTimeout(() => {
    //         setForDiv(true);
    //     }, [1500])
    // }, [])

    return (
        <div
            data-scroll
            data-scroll-speed="-.3"
            data-scroll-section
            className='w-full h-screen bg-zinc-900 pt-1'
        >
            <div className="textstructure mt-40 px-5 sm:px-10 md:px-20">
                {["we create", "eye-opening", "presentations"].map((item, index) => {
                    return (
                        <div key={index} className="masker -mt-3">
                            <div className="w-fit flex items-center overflow-hidden flex-wrap">
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '7.5em' }}
                                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                        className={`overflow-hidden rounded-lg  max-sm:w-[2.5rem] max-md:w-[4.5rem] w-[7.5em] max-md:h-[2.5rem] max-sm:h-[2.3rem] h-[4.5em] mr-2`}
                                    >
                                        <img
                                            src={MainLogo}
                                            className='object-contain'
                                        />
                                    </motion.div>
                                )}
                                <h1 className="uppercase font-founders-grotesk font-semibold text-[42px] md:text-8xl sm:text-7xl tracking-tighter text-wrap">{item}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="max-md:flex-col max-md:items-start max-md:gap-8 max-md:px-8 border-t-[1px] mt-32 border-zinc-800 flex justify-between items-center px-14 py-4">
                {["For public and private companies", "From the first pitch to IPO"].map((item) => {
                    return (
                        <p key={item} className='text-lg leading-none font-light tracking-tight'>{item}</p>
                    )
                })}
                <div className='flex items-center gap-2'>
                    <button className='uppercase font-medium text-sm px-4 py-1 but-hover'>start the project</button>
                    <div className='w-8 h-8 but-hover flex justify-center items-center'>
                        <MdArrowOutward />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing