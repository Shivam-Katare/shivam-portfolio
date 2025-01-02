import React from 'react'
import { FaGithub, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'

function Outro() {
  return (
    <React.Fragment>
      <div className='w-full'>
        <div className='w-full text-center justify-items-center'>
          <p className='inline mr-2 font-[fantasy] text-[24px]'>
            Let&apos;s Create Something Amazing Together! 🚀
          </p>
        </div>

        <div className='mt-6'>
          <div className='text-center'>
            <span>
              I share my knowledge by writing blog posts, speaking at tech events, posting on socials about tech-related topics like web development.
            </span>
          </div>
        </div>

        <p className='mt-6 text-left'>
           <b>Reach out to me</b> -
        </p>

        <div className='mt-6 w-full poppins-medium text-[17px]'>
          <div className='text-center'>
            You can connect with me through <span className='innovative'>
              <span>
                my socials, or 💌
              </span>
            </span>

            <span className='text-[#ff007e] font-semibold'> 
                <a href="mailTo:katare27451@gmail.com" className='font-extrabold'> email me </a>
           </span>
              for any opportunitie.
          </div>
        </div>

        <div className='w-full grid place-items-center mt-1.5'>
        <div className='mt-2 grid place-items-center grid-cols-3 justify-items-center items-center text-[20px]'>
          <a href='https://www.linkedin.com/in/shivam-katare/' target='_blank'> <FaLinkedin /> </a>
          <a href='https://github.com/Shivam-Katare' target='_blank'> <FaGithub /></a>
          <a href='https://twitter.com/Shivamkatare_27' target='_blank'> <FaSquareXTwitter /></a>
        </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Outro
