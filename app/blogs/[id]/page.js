import { blogs } from '@/app/data/blogs'
import { notFound } from 'next/navigation'
import React from 'react'

const SingleBlog = ({params}) => {
    const {id} = params
    const blog = blogs.find(blog=>blog.id === parseInt(id))
    // const {title,description} = blog
    if (!blog) {
      notFound()
    }
    else{
      return (
        <div className='font-bold text-xl p-4'>
            <h4>{blog?.title}</h4>
            <p>{blog?.description}</p>
        </div>
      )
    }

}

export default SingleBlog