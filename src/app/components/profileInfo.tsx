import React from 'react'
import Image from 'next/image'

export const ProfileInfo = () => {
  return (
    <div className=' flex border-red-500 border items-center gap-10'>
        <div className=' w-52 h-52 bg-[#FFE071] border-white border-2 rounded-full flex items-center justify-center'>
            <Image className=' rounded-full' src="/profile.jpeg" width={192} height={192} alt='profile image' /> 
        </div>
        <div className=' p-4'>
            <h1 className=' text-5xl text-[#F1F2F4] mb-3'>Hewerton Soares</h1>
            <h3 className=' text-xl text-[#A3ABB2] mb-3'>Front end developer</h3>
            
            <div className=' flex gap-6'> {/* socials */}
                <a href="https://github.com/Sherlockzen">
                    <Image src={'/github.svg'} width={32} height={32} alt='' />
                </a>
                <a href="https://twitter.com/HewertonSoares">
                    <Image src={'twitter.svg'} width={32} height={32} alt='' />
                </a>
                <a href="https://www.linkedin.com/in/hewertonsoares/">
                    <Image src={'/linkedin.svg'} width={32} height={32} alt='' />
                </a>
                <Image src={'/youtube.svg'} width={32} height={32} alt='' />
            </div>
        </div>
    </div>
  )
}
