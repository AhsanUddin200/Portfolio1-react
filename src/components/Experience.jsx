import React from 'react';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import nextjs from '../assets/next.png';
import typescript from '../assets/typescript.png';
import github from '../assets/github.png';
import tailwindcss from '../assets/tailwindcss.png';
import php from '../assets/php.png';

const Experience = () => {

  const tech = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: tailwindcss,
      title: 'Tailwind CSS',
      style: 'shadow-sky-300'
    },
   
    {
      id: 4,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 5,
      src: react,
      title: 'React',
      style: 'shadow-blue-700'
    },
    {
      id: 6,
      src: nextjs,
      title: 'Next.js',
      style: 'shadow-white'
    },
    {
      id: 7,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-500'
    },
    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id: 9,
      src: php,
      title: 'php',
      style: 'shadow-purple-200'
    }
  ];

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>There are some technologies I'm working with now</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 py-12 sm:px-0'>
          {
            tech.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt='' className='w-20 mx-auto' />
                <p className='mt-6'>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Experience;
