import delay from '@/app/_lib/delay'
import React from 'react'

const Notificaation =async () => {
    await delay(3000);
  return (
    <div className='flex justify-center items-center rounded text-xl border border-black p-4 h-[360px]'>
        Notificaations
    </div>
  )
}

export default Notificaation