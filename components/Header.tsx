import React from 'react'
import Image from 'next/image'
import icon from '../images/icon.svg'
import { BeakerIcon, HomeIcon, ChevronDownIcon  } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <div className='flex'>
        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
            <Image 
                  objectFit='contain'
                  src={icon} layout='fill' alt={'logo'}/>
        </div>


    <div className='flex items-center'>
        <HomeIcon className='h-5 w-5 ' />
        <p>Home</p>
        <ChevronDownIcon className='h-5 w-5'/>
    </div>



    </div>
  )
}

export default Header