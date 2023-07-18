import React from 'react'
import { testimonal } from '../../dummydata'
import './style.css'
import Title from '../comman/title/Title'

const Test = () => {
  return (
    <>
    <section className='testimonal padding1'>
        <div className="container">
            <Title subtitle='testimonal' title='our successful students'/>
        
        <div className='content grid2' style={{justifyContent:'space-around'}}>
            {testimonal.map((val)=>(
                <div className="items shadow">
                    <div className='box flex'>
                        <div className='img'>
                            <img src={val.cover} alt=''/>
                            <i className='fa fa-quote-left icon'></i>
                        </div>
                        <div className='name'>
                            <h2>{val.name}</h2>
                            <span>{val.post}</span>
                        </div>
                    </div>
                    <p>{val.desc}</p>        
                </div>
            ))}
        </div>
        </div>
    </section>
    </>
  )
}

export default Test
