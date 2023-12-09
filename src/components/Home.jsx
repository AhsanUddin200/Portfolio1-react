import React from 'react';
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className=' px-24 h-screen w-full bg-gradient-to-b bottom from-black via-black to-gray-800'>

        <div className='max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-20 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h3 className='text-4xl sm:text-6xl font-bold text-yellow-50'> I am full stack developer</h3>
            
            <p className='text-gray-500 py-4 max-w-md'>As a full-stack developer, I handle both frontend and backend development. My expertise spans creating intuitive user interfaces using cutting-edge frontend technologies while architecting robust and scalable backend systems. I leverage a diverse skill set to craft seamless experiences, ensuring smooth interactions for users while maintaining the integrity and efficiency of the underlying systems.

            </p>
            
            <div>
                <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-700 hover:scale-75'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-500'>
                    <MdOutlineArrowRightAlt size={25}  />
                    </span>
                  
                </Link>
                </div>
            </div>
            <div>
            <img
  src={HeroImage}
  alt="my image"
  className='rounded-3xl mx-auto w-full md:w-1/2 my-2 md:my-1 min-w-40 duration-500 hover:scale-150'
/>
</div>



        </div>
    
    </div>
  );
};

export default Home;
