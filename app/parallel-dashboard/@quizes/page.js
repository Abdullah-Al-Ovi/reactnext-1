import delay from '@/app/_lib/delay'
import React from 'react'

const Quize = async() => {
    await delay(2000);
  return (
    <div className='flex justify-center items-center rounded text-xl border border-black p-4 h-[360px]'>
        Quizes
    </div>
  )
}

export default Quize