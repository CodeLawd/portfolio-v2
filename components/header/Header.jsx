import React from 'react'
import Button from '../shared/Button'

const Header = () => {
  return (
    <div className="px-6 md:px-12 mx-auto flex items-center md:py-44 bg-cover bg-no-repeat w-full h-[92vh] md:h-auto">
      <div className='max-w-6xl mx-auto -mt-20 sm:mt-0'>
        <span className='font-sfmono text-secondary'>Hi, my name is</span>
        <h1 className='text-gray font-calibreBlack text-3xl md:text-5xl lg:text-7xl mt-4 font-bold tracking-wider'>Joshua Alexander.</h1>
        <h1 className='text-[#8892B0] font-calibreBlack pt-2 md:pt-0 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wider'>I love solving problems with code.</h1>
        <p className='text-[#8892B0] py-3 lg:w-[55%] text-xl mt-5 mb-6'>I'm a <span className="text-secondary">Software developer</span> who specializes in JavaScript Technologies (Node.js, Express, React/Next and MongoDB) to <span className="text-secondary"> solve business problems. </span> Currently, I’m focused on building accessible, human-centered products at  <span className="text-secondary">Brooks and Blake</span>.</p>

        <a target="_blank" href="https://docs.google.com/document/d/1prnCNhc6ovyO1CO_mj-xgzfGDZvSIovRAaZFxyOTMfQ/edit?usp=sharing" className="border hover:bg-[#5ff1cf33] text-secondary border-secondary rounded-md px-8 py-3 text-lg ml-2"> Checkout my resume!</a>
      </div>
    </div>
  )
}

export default Header