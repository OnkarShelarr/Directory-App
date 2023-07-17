import React from 'react'
import './team.css'
import Back from '../comman/back/Back'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <>
      <Back title='Team'/>
      <section className='team padding'></section>
      <div className="container grid">
      <TeamCard/>
      </div>
    </>
  )
}

export default Team
