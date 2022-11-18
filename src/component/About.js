import React from 'react'

function About() {
    return (
        <div id='about' className='flex justify-center px-6 py-10 flex-col gap-8 md:h-screen'>
            <div className="relative after:content-['About'] after:absolute after:text-4xl after:top-5 after:left-2 text-6xl font-bold text-gray-200 after:text-black ">About</div>
            <div className='flex items-center justify-center'>
                <p className='flex justify-center items-center text-xl font-semibold px-12 md:w-[1020px]'>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ratione porro perferendis nemo, voluptatum fugiat, quibusdam laboriosam, voluptatem quae earum ab? Quisquam aspernatur corrupti animi, exercitationem recusandae delectus illo? Tempore totam fugiat alias consequuntur explicabo? Praesentium dolorem corporis suscipit beatae! "</p>
            </div>
        </div >
    )
}

export default About