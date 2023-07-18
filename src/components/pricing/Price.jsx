import React from 'react'
import Back from '../comman/back/Back'
import PriceCard from './PriceCard'
import './price.css'
import Faq from './Faq'

const Price = () => {
  return (
    <>
      <Back title='Choosde The Right Plan'/>
      <Faq/>
      <section className='pricing padding'>
        <div className="container grid">
            <PriceCard/>
        </div>
      </section>
    </>
  )
}

export default Price
