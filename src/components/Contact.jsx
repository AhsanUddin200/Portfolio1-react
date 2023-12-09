import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white' >

      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
        <p className='mt-6'>Fill out the form below and I'll be in touch shortly.</p>
      </div>

      <div className='flex justify-center item-center'>
        <form action='https://getform.io/f/c1972c24-1564-4739-9a48-6f082643d4fc'
        method='POST'
        className='flex flex-col w-full md:w-1/2'>
            <input type='text'
            name='name'
            placeholder='Enter your name' 
            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' >
                
            </input>

            <input type='text'
            name='email'
            placeholder='Enter your email public key' 
            className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' >
                
            </input>

            <textarea 
            name='message'
            rows='10'
            placeholder='Enter your query'
            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>

            </textarea>

            <button
              className='text-white bg-gradient-to-b from-cyan-400 to-blue-600 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300'>
              
              Let's connect!
            </button>


        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
