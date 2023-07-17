import React from 'react'
import Back from '../comman/back/Back'
import CourseCard from './CourseCard'
import OnlineCourses from '../home/OnlineCourses'

const CourseHome = () => {
  return (
    <div>
      <Back title='Explore Courses'/>
      <CourseCard/>
      <OnlineCourses/>
    </div>
  )
}

export default CourseHome
