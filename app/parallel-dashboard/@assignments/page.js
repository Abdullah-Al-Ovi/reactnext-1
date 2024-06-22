import delay from '@/app/_lib/delay'
import Link from 'next/link';
import React from 'react'

const Assignment = async() => {
    await delay(5000);
    // throw new Error("fsshbfhbj")
  return (
    <div className='flex flex-col justify-center items-center rounded text-xl border border-black p-4 h-[360px]'>
       <span>All Assignments</span>
       <button className='border border-black px-2 py-1'>
        <Link href="/parallel-dashboard/seen">Seen</Link>
       </button>
    </div>
  )
}

export default Assignment