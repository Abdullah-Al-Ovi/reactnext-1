'use client' 
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='text-red-400'>
      <h2>Something went wrong in assignments!</h2>
    </div>
  )
}