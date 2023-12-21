import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineFolderOpen } from 'react-icons/ai';

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn 
                    <FaLinkedin size={25}/>
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub
                    <FaGithub size={25}/>
                </>
            ),
            href: 'https://github.com/AhsanUddin200',        
        },
        {
            id: 3,
            child: (
                <>
                    Mail
                    <HiOutlineMail size={25}/>
                </>
            ),
            href: 'mailto:ahsanuddin@gmail.com',       
        },
        {
            id: 4,
            child: (
                <>
                    Resume
                    <BsFillPersonLinesFill size={25}/>
                </>
            ),
            href: '/Ahsan Resume.pdf',
            
            download: true
        },
        {
            id: 5,
            child: (
                <>
                    C.Letter
                    <AiOutlineFolderOpen size={25}/>
                </>
            ),
            href: '/Cover Letter(Ahsan Nasir)',
            style: 'rounded-br-md',
            download: true
        },
    ];
    
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'> 
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + ' ' + style}>
                        <a href={href}
                         className='flex justify-between items-center w-full text-white'
                          download={download}
                           target='_blank'
                           rel='noreferrer'
                           > 
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;
