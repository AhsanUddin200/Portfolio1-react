import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'portfolio' },
        { id: 4, link: 'experience' },
        { id: 5, link: 'contact' }
    ];

    return (
        <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
            <div>
                <h1 className='text text-6xl font-signature ml-3'>Ahsan</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-300 text-lg'>
                        <ScrollLink to={link} smooth duration={700}>{link}</ScrollLink>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-200'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-5 text-5xl'>
                           <ScrollLink onClick={() =>setNav(!nav)}
                           to={link} 
                           smooth duration={700}>
                            {link}</ScrollLink>
                    </li> 
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
