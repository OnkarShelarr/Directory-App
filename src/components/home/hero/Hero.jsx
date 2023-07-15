import React from 'react'
import './hero.css'
import Title from '../../comman/title/Title'

const Hero = () => {
  return (
    <div>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle='WELCOME TO BRAIN-DESK' title='BEST ONLINE EDUCATION' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos accusamus quas ullam delectus, rem, fugiat sapiente voluptatum quasi, molestias maxime facere deleniti tenetur quibusdam autem? Esse quis delectus temporibus!</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </div>
  )
}

export default Hero
