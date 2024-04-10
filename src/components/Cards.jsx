import React from 'react'

const Cards = () => {
  return (
    <div className='cards-container w-full h-auto px-16 max-md:px-5 py-36 flex gap-4 bg-white max-xl:flex-col'>
      <div className="left w-1/2 max-xl:w-full h-[60vh] relative bg-[#004D43] rounded-xl">
        <div className="image-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className='w-40'
          />
        </div>
        <button className='absolute bottom-10 text-[#B3D663] left-10 border-[#B3D663] border-[1px] rounded-full px-4 py-1'>&copy;2019-2020</button>
      </div>
      <div className="right-container w-1/2 max-xl:w-full flex max-sm:flex-col gap-4 max-xl:gap-2">
        <div className="right relative w-1/2 max-sm:w-full h-[60vh] bg-[#212121] rounded-xl flex-shrink-0">
          <div className="image-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              className='w-36'
            />
          </div>
          <button className='absolute bottom-10 tracking-tighter ml-6 border-[#fff] border-[1px] rounded-full px-4 py-1'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="right relative w-1/2 max-sm:w-full h-[60vh] bg-[#212121] rounded-xl flex-shrink-0">
          <div className="image-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              className='w-24'
            />
          </div>
          <button className='absolute bottom-10 ml-6 tracking-tighter border-[#fff] border-[1px] rounded-full px-4 py-1 h-auto text-wrap'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  )
}

export default Cards