import React from 'react'
import Title from '../comman/title/Title'
import { online } from '../../dummydata'

const OnlineCourses = () => {
  return (
    <div>
      <section className='online'>
        <div className='container'>
            <Title subtitle="PRODUCTS" title='Other Products'/>
        </div>
        <div className='content grid3'>
            {online.map((val)=>(
                <div className='box'>
                    <div className='img'>
                        <img src={val.cover} alt=''/>    
                        <img src={val.hoverCover} alt='' className='show'/>    
                    </div>    
                    <h1>{val.courseName}</h1>
                    <span>{val.course}</span>
                </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default OnlineCourses
