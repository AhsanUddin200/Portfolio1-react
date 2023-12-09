import React from 'react';
import bmi from '../assets/portfolio/bmi.png';
import news from '../assets/portfolio/news.png';
import ebook from '../assets/portfolio/ebook.png';
import ecommorce from '../assets/portfolio/ecommorce.png';
import github1 from '../assets/portfolio/github1.png';
import weather from '../assets/portfolio/weather.png';


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bmi,
      codeLink: 'https://github.com/AhsanUddin200/React-01-/blob/main/tic-tac-teo/src/BMI.js',
      demoLink: 'URL_TO_BMI_DEMO'
    },
    {
      id: 2,
      src: news,
      codeLink: 'https://github.com/AhsanUddin200/React-01-/blob/main/tic-tac-teo/src/News.js',
      demoLink: 'URL_TO_PRODUCT_DEMO'
    },
    {
      id: 3,
      src: ebook,
      codeLink: 'https://github.com/AhsanUddin200/React-01-/blob/main/tic-tac-teo/src/Book.js',
      demoLink: 'URL_TO_EBOOK_DEMO'
    },
    {
      id: 4,
      src: ecommorce,
      codeLink: 'URL_TO_ECOMMERCE_CODE',
      demoLink: 'URL_TO_ECOMMERCE_DEMO'
    },
    {
      id: 5,
      src: github1,
      codeLink: 'https://github.com/AhsanUddin200/React-01-/blob/main/tic-tac-teo/src/Github.js',
      demoLink: 'URL_TO_GITHUB1_DEMO' 
    },
    {
      id: 6,
      src: weather,
      codeLink: 'https://github.com/AhsanUddin200/React-01-/blob/main/tic-tac-teo/src/Weather.js',
      demoLink: 'URL_TO_WEATHER_DEMO'
    },
  ];

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg pd-4 mx-auto flex flex-col justify-center w-full h-screen'>
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='mt-6'>Check some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, codeLink, demoLink }) => (
            <div key={id} className='shadow-md shadow-gray-700 rounded-sm'>
              <img src={src} alt='' className='rounded-md duration-300 hover:scale-95' />
              <div className='flex items-center justify-center'>
                <a href={demoLink} target='_blank' rel='noopener noreferrer'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-125'>Demo</button>
                </a>
                <a href={codeLink} target='_blank' rel='noopener noreferrer'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-125'>Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;