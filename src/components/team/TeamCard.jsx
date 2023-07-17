import React from 'react'
import { team } from '../../dummydata'
import './team.css'

const TeamCard = () => {
  return (
    <>
     {team.map((val)=>(
         <div className='items shadow'>
            <div className="img">
                <img src={val.cover} alt=''/>
                <div className='overlay'> 
                    <i className='fab crystal fa-facebook-f'></i>
                    <i className='fab fa-instagram'></i>
                    <i className='fab crystal fa-twitter'></i>
                </div>
            </div>
            <div className='detailss'>
                <h2>{val.name}</h2>
                <p>{val.work}</p>
            </div>
        </div>
     ))}
    </>
  )
}

export default TeamCard
