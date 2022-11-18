import React from 'react'
import brokenphone from '../images/broken-phone.jpg'

function Homepage() {
    return (
        <div className='flex gap-2  min-h-screen'>

            <div className='md:flex-row flex flex-col items-center md:justify-between space-y-16 w-full'>

                <div className='relative md:text-6xl text-4xl text-center z-10 md:w-1/2 mt-20 px-8 pt-12 md:pl-12' >We Sell Spare Parts i.e in cheap Price and best
                    quality </div>

                <picture className='md:absolute -z-1 right-0'>
                    <img className='' src={brokenphone} alt="" />
                </picture>

            </div>
        </div>
    )
}

export default Homepage