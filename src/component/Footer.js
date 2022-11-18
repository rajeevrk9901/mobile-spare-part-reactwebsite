import React from 'react'
import { NavLink } from "react-router-dom"

import { AiFillTwitterCircle, AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

function Footer() {
    return (
        <div className='bg-[#FCF1F1] '>
            {/* <div className='text-2xl text- px-6 h-1/3'>Footer</div> */}
            <div className='md:flex-row flex-col flex justify-center text-center md:justify-around items-center md:h-[150px] md:space-y-0 md:py-0 space-y-10 py-8'>
                <div className="left-container flex flex-col gap-y-3">
                    <p className='font-bold text-xl'>Quick Links</p>
                    <p><NavLink className='text-blue-800' to="/about">About</NavLink></p>
                    <p><NavLink className='text-blue-800' to="/contactus">Contact us</NavLink></p>
                </div>
                <div className="middle-container flex flex-col gap-y-3">
                    <div className='font-bold text-xl'>Connect with us on</div>
                    <div className='flex justify-center text-2xl gap-x-4'>
                        <a href=""><AiFillTwitterCircle /></a>
                        <a href=""><AiFillInstagram /></a>
                        <a href=""><AiFillFacebook /></a>
                        <a href=""><AiFillLinkedin /></a>
                    </div>
                </div>
                <div className="right-container flex flex-col gap-y-3">
                    <div className='font-bold text-xl'>Contact Details</div>
                    <div>Mobile   : 93080xxxxx</div>
                    <div> Email   : Mspare@gmail.com</div>
                </div>


            </div>
            <div className='text-center py-5 font-bold text-xl'>Mspare &copy;2022 All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer