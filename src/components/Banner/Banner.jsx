import React from 'react';
import BannerImg from './images/Banner.png'

const Banner = () => {
  return (
    <>
    <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* image section */}
            <div className='flex justify-center items-center'>
                <img src={BannerImg} alt="banner" />
            </div>
            {/* text section */}
            <div className='flex flex-col justify-center'>
              <h1 className='text-4xl font-semibold'>food is always good</h1>
              <p className='py-4 font-semibold'>A delicious meal has the power to bring people together and create unforgettable memories.</p>
            </div>

        </div>
    </div>
    </>
  )
}

export default Banner