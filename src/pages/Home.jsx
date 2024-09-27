import React from 'react'
import image from '../images/incubation2.png'
import Features from '../components/Features'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 font-[sans-serif]">
      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
              Welcome to
              <br className="xl:hidden" />
              <span className="text-cyan-400 uppercase"> InfraShare</span>
            </h1>
            <p className="max-w-md font-medium text-lg text-white sm:text-xl mt-4 md:mt-6 md:max-w-3xl">
            InfraShare simplifies access to top-tier research labs, equipment, and incubation centers across India. Book or rent resources with ease!
            </p>

            <div className="mt-12 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
              <div className="rounded-md shadow">
                <button className="w-full flex items-center font-semibold justify-center px-8 py-3 text-[17px] tracking-wide rounded-md text-indigo-600 bg-white hover:text-white hover:bg-slate-900 transition duration-150 ease-in-out">
                  <Link to='/register'>Get Started</Link>
                </button>
              </div>
              <div> 
              <button className="w-full flex items-center justify-center px-8 py-3 text-[17px] tracking-wide rounded-md text-white bg-indigo-500 hover:bg-cyan-400 hover:text-black font-dmsans font-semibold transition duration-200 ease-in-out">
                  <Link to='/about'>Learn More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-75" src={image} alt="Delicious Food" />
        </div>
      </div>
    </div>
  )
}


export default Home