import React from 'react'
import { blogs } from '../data/blogs'
import Link from 'next/link'
import BlogItem from '../components/BlogItem'

const Blogs = () => {
    return (
        <div className='px-10 py-6 space-y-4'>
            <h1 className='font-extrabold text-2xl'>Blog lists</h1>
            <div>
                {
                    blogs?.map(blog =>
                        <Link key={blog.id} href={`/blogs/${blog.id}`}>
                            <BlogItem title={blog.title}></BlogItem>
                        </Link>

                    )
                }
            </div>
        </div>
    )
}

export default Blogs