import React from 'react'

const layout = ({ children, assignments, quizes, notifications }) => {
    return (
        <>
            {children}
            <div className='grid gap-6 grid-cols-2 grid-rows-2 p-8'>
                {assignments}
                {quizes}
                {notifications}
            </div>
        </>
    )
}

export default layout