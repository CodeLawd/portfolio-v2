import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline';

const About = () => {
    return (
        <div className="px-6 md:px-12 mx-auto pb-20 lg:py-40 bg-cover bg-no-repeat w-full" id="#about">
            <div className='max-w-6xl mx-auto'>
                <div className="">
                    <h1 className="text-3xl font-calibreBlack text-gray"> <span className="text-2xl font-sfmono text-secondary">00.</span> About Me </h1>
                    {/* <div className="h-[1px] bg-gray inline-flex" /> */}
                </div>
                <div className='flex max-w-5xl mt-5 gap-10 flex-col md:flex-row'>
                    <div className='text-[#8892B0] text-xl'>
                        <p>Hello! My name is Joshua and I enjoy converting creative designs to code. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                        <br />
                        <h1 className="text-gray font-calibreBlack text-2xl inline-flex "> <div className="rounded-full h-2 w-2 bg-secondary mr-3 mt-2" /> Engineering</h1>
                        <p>When it comes to building JavaScript applications, I have the right tools and can work completely independently of them to deliver fast, resilient solutions that are optimized for scale — performance and scalability are top priorities for me.</p>
                    </div>
                    <div className="w-[80%] sm:w-[70%] h-72 md:w-full relative sepia hover:sepia-0 mx-auto">
                        <img src="/user.jpg" alt="" className='rounded-md w-full h-full object-cover  relative z-10' />
                        <div className="border-2 border-secondary w-full h-full rounded-md absolute top-3 -right-3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About