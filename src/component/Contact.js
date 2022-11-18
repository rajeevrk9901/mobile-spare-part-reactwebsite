import React from 'react'

import map from '../images/Map.png'


function Contact() {
    return (
        <>
            <div id='contact' className='flex justify-center px-6 py-10 flex-col gap-8'>
                <div className="relative after:content-['Contact'] after:absolute after:text-4xl after:top-5 after:left-2 text-6xl font-bold text-gray-200 after:text-black ">Contact</div>

                <div className='flex md:flex-row flex-col-reverse gap-y-8'>
                    <div className='overflow-hidden'>
                        <img className='md:absolute md:right-14 opacity-65 ' src={map} alt="" srcset="" />
                    </div>
                    {/* <div className='flex gap-y-2'> */}
                    <p className='md:text-2xl text-xl md:mt-8'> <b>Street:</b> 8040 E Gelding Dr <br />
                        <b>City/Town:</b> Scottsdale <br />
                        <b>State:</b> Arkansas <br />
                        <b>Zip/Postal Code:</b> 85260 <br />
                        <b>Phone Number:</b> (480) 627-9850 <br />
                        <b>Country:</b> United States <br />
                        <b>Latitude:</b> 33.616429 Longitude-111.9079
                    </p>
                    {/* </div> */}
                </div>
            </div>


            <div className='overflow-hidden'>
                <form action="">
                    <div className='ml-10 py-8 text-xl font-bold'>Having Problem? Contact with us</div>

                    <div className='flex flex-col space-y-6 ml-10'>

                        <div className='space-x-4'>
                            <label className='font-bold' htmlFor="name">Name : </label>
                            <input className='outline outline-1 outline-gray-400 pl-2' type="text" name="" id="name" />
                        </div>

                        <div className='space-x-4'>
                            <label className='font-bold' htmlFor="email">Email : </label>
                            <input className='outline outline-1 outline-gray-400 pl-2' type="text" name="" id="email" />
                        </div>

                        <div className='flex flex-row space-x-4'>
                            <label className='font-bold flex flex-row items-center' htmlFor="description">Description : </label>
                            <div>
                                <textarea className='outline outline-1 outline-gray-400 pl-2' name="" id="description" cols="20" rows="7"></textarea>
                            </div>
                        </div>

                    </div>

                    <button className='md:mx-48 ml-36 mb-4 mt-6 px-6 py-2 font-bold rounded-xl bg-red-300' type="submit">SUBMIT</button>
                </form>
            </div>


        </>

    )
}

export default Contact