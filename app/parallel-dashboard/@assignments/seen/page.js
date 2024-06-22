import Link from 'next/link'
import React from 'react'

const SeenNotifications = () => {
  return (
    <div className='flex flex-col justify-center items-center rounded text-xl border border-black p-4 h-[360px]'>
    <span>Seen Assignments</span>
    <button className='border border-black px-2 py-1'>
     <Link href="/parallel-dashboard">All</Link>
    </button>
 </div>
)
  
}

export default SeenNotifications