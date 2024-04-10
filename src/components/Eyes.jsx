import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    }, [])

    return (
        <div
            className='eyes w-full h-screen overflow-hidden'
        >
            <div
                data-scroll
                data-scroll-speed="-.7"
                className="relative w-full h-full bg-cover bg-center bg-[url('./assets/eyes-bg.jpg')]"
            >
                <div className="absolute flex justify-center gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className='w-52 h-52 flex justify-center items-center rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line w-full h-10">
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-52 h-52 flex justify-center items-center rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line w-full h-10">
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes