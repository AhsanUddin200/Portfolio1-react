import React from 'react';
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className=' px-24 h-screen w-full bg-gradient-to-b bottom from-black via-black to-gray-800'>

        <div className='max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-20 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h3 className='text-4xl sm:text-6xl font-bold text-yellow-50'> I am front end developer</h3>
                {/* <h6 className='text-white text mt-2 shadow-md'>Crafting Dynamic Frontend Experiences: Design, Integration, & User Engagement</h6> */}
            
            <p className='text-gray-500 py-4 max-w-md'>As a frontend developer with a keen eye for user interface design, I excel in seamlessly integrating APIs to enhance the functionality of web applications. I specialize in creating dynamic and responsive user experiences by connecting frontend interfaces with backend services through robust API integrations. My skill set includes not only crafting visually appealing interfaces but also ensuring efficient communication between the frontend and backend systems, resulting in a cohesive and feature-rich user experience.

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
