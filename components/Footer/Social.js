import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'
const style ={
    wrapper:'flex mx-auto items-center justify-center gap-8 md:gap-12 my-8 md:my-12',
    social:'text-primary hover:text-green-700 rounded-full text-xl md:text-2xl hover:mx-2 transition-all duration-[300ms] cursor-pointer p-2',
}
const Social = () => {
  return (
    <div className={style.wrapper}>
      <a aria-label="link to facebook account facebook" className={style.social} target='_black' href="https://www.facebook.com/Funncart-101414449340758"><BsFacebook/></a>
      <a aria-label="link to facebook account instagram" className={style.social} target='_black' href="https://www.instagram.com/funncartstore"><BsInstagram/></a>
      <a aria-label="link to facebook account twitter" className={style.social} target='_black' href="https://www.twitter.com"><BsTwitter/></a>
    </div>
  )
}    
export default Social;