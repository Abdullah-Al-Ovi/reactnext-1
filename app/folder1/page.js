import Link from 'next/link'
import React from 'react'

const folder1 = () => {
    return (
        <div className='h-[100vh] flex flex-col justify-center items-center'>
            <h2>Folder 1 page</h2>
            <Link href="/folder1/folder2">Folder 2</Link>

        </div>
    )
}

export default folder1