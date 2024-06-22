
import React from 'react'

const BlogItem = ({ title }) => {
    return (
        <div>
            <h3 className='my-2 font-bold text-xl'>
                {title}
            </h3>
        </div>
    )
}

export default BlogItem