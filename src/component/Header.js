import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
// import '../styles/Header.css'
import { FcHome, FcAbout, FcContacts } from "react-icons/fc";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { GrClose } from "react-icons/gr";
import '../App.css'


import logo from '../images/Mspare Logo.png'

const NavData = [

    {
        "icon": <FcHome />,
        "name": 'Home',
        'url': '/'
    },

    {
        "icon": <FcAbout />,
        "name": 'About',
        "url": '/About'
    },

    {
        "icon": <FcContacts />,
        "name": 'Contact us',
        "url": '/Contactus'
    }

]







function Header() {

    const [navmenu, setNavmenu] = useState(false);

    const [navopen, setNavopen] = useState(true);

    // const [activated, setActivated] = useState(false);

    const handleNavopen = () => {
        setNavopen(!navopen);
    }

    const handleNavmenu = () => {
        setNavmenu(!navmenu);
    }


    return (
        <>
            <div className="">
                <div className='flex justify-between bg-[#D9D9D9] md:py-2 py-5 px-12 shadow-md border-b border-[#747272]'>

                    <div className=''>
                        <img className='absolute md:-top-4 -top-3 -left-3 h-24' src={logo} alt="" />
                    </div>

                    <nav className='desktop-nav md:block hidden'>
                        <ul className='flex gap-6'>
                            {
                                NavData.map(nav => {
                                    return (
                                        <NavLink className='list-none'>
                                            <NavLink className="flex text-center items-center gap-3 nav-links text-black hover:bg-gray-200 px-4 py-2 rounded-xl" to={nav.url}><span>{nav.icon}</span>{nav.name}</NavLink>
                                        </NavLink>
                                    )
                                })}
                        </ul>
                    </nav>

                    <div className='md:hidden text-center' onClick={() => { handleNavopen(); handleNavmenu(); }}>
                        {/* {navopen ? <GiHamburgerMenu /> : <GrClose />} */}

                        {navopen ?

                            <div className='flex flex-col items-end md:hidden transition-all' onClick={() => setNavopen(!navopen)}>
                                <div id='hamburger' onClick={() => setNavmenu(!navmenu)} className='hamburger cursor-pointer flex flex-col space-y-1'>
                                    <div className='w-6 h-1 bg-black'></div>
                                    <div className='w-6 h-1 bg-black'></div>
                                    <div className='w-6 h-1 bg-black'></div>
                                </div>
                            </div>

                            :

                            <div className='flex flex-col items-end md:hidden p-2 transition-all' onClick={() => setNavopen(!navopen)}>
                                <div id='hamburger' onClick={() => setNavmenu(!navmenu)} className='absolute hamburger cursor-pointer flex flex-col space-y-1 transform rotate-45 top-3 right-14' >
                                    <div className='absolute rotate-90 top-3 w-6 h-1 rotate bg-black'></div>
                                    <div className='absolute top-2 w-6 h-1 bg-black'></div>
                                </div>
                            </div>

                        }

                    </div>





                </div >


                <nav id='mobile-nav' className={`mobile-nav bg-gray-200 flex justify-center items-center w-full overflow-hidden md:hidden h-0 delay-75 ${navmenu ? 'h-[150px]' : 'transition ease-in-out'}`}>

                    <ul className='mobile-nav overflow-hidden  flex-col space-y-5 my-5 '>
                        {
                            NavData.map(nav => {
                                return (
                                    <li className='list-none'>
                                        <NavLink onClick={() => { handleNavopen(); handleNavmenu(); }}
                                            className="flex text-center items-center gap-3" to={nav.url}><span>{nav.icon}</span>{nav.name}
                                        </NavLink>
                                    </li>
                                )
                            })}
                    </ul>
                </nav>
            </div >
        </>
    )
}

export default Header