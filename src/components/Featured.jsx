import React, { useState } from 'react'
import fyde from "../assets/fyde.png";
import vise from "../assets/vise.jpg";
import { motion } from "framer-motion"
import { Power4 } from 'gsap/all';

const Featured = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [isHover, setIsHover] = useState(false);

    return (
        <div className='w-full py-10'>
            <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-12">
                <h1 className='text-6xl'>Featured projects</h1>
            </div>
            <div className="px-14">
                <div className="cards w-full flex gap-5 mt-10">
                    <div
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="cardcontainer relative w-1/2 h-[80vh]"
                    >
                        <div className="card w-full h-full rounded-xl bg-green-600 overflow-hidden">
                            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[5] text-8xl leading-none font-semibold tracking-tighter font-founders-grotesk">
                                {"FYDE".split("").map((item, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: "100%" }}
                                        animate={isHovering ? ({ y: 0 }) : ({ y: "100%" })}
                                        transition={{ ease: [0.83, 0, 0.17, 1], delay: index * .06 }}
                                        className='inline-block'
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1>
                            <img
                                src={fyde}
                                className='w-full h-full bg-cover'
                            />
                        </div>
                    </div>
                    <div
                        className="cardcontainer relative w-1/2 h-[80vh]"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[5] text-8xl leading-none font-semibold tracking-tighter font-founders-grotesk">
                                {"VISE".split("").map((item, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: "100%" }}
                                        animate={isHover ? ({ y: 0 }) : ({ y: "100%" })}
                                        transition={{ ease: [0.83, 0, 0.17, 1], delay: index * .06 }}
                                        className='inline-block'
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1>
                            <img
                                src={vise}
                                className='w-full h-full bg-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured