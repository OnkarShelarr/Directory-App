import React from 'react'
import { blog } from '../../dummydata'
import './blog.css'

const BlogCard = () => {
  return (
    <div className='grid2'>
      {blog.map((val)=>(
        <div className="items shadow">
            <div className="img">
                <img src={val.cover} alt=''/>
            </div>
            <div className="text">
                <div className="admin flexSB" style={{width:'305px'}}>
                    <span>
                        <i className='fa fa-user'></i>
                        <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                        {/* <i className="fa-solid fa-calendar-days"></i> */}
                        <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                        <i className='fa fa-comments'></i>
                        <label htmlFor=''>{val.com}</label>
                    </span>
                </div>
                <h1>{val.title}</h1>
                <h3 style={{fontSize:'20px', fontWeight:'200' }}>{val.desc}</h3>
            </div>
        </div>
      ))}
    </div>
  )
}

export default BlogCard
