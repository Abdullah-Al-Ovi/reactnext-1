"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const NavigationButton = ({path,children}) => {
    const router = useRouter()
    const handleNavigate = () =>{
        router.push(path)
    }
  return (
    <div className='font-bold border-[1px] border-black px-2 py-1 rounded'>
        <button onClick={handleNavigate}>{children}</button>
    </div>
  )
}

export default NavigationButton