import React from 'react'
import Back from '../comman/back/Back'
import BlogCard from './BlogCard'
import './blog.css'

const Blog = () => {
  return (
    <>
    <Back title='Blog Posts'/>
    <section className='blog padding' style={{marginRight:'550px'}}>
        <div className='container'>
            <BlogCard/> 
        </div>
    </section>
    </>
  )
}

export default Blog
