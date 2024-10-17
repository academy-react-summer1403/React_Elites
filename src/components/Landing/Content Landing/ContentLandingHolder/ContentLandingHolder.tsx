import React from 'react'
import style from './ContentLandingHolder.module.css'
import { BannerHolder } from '../WebBanner/BannerHolder/BannerHolder'
import { ProgrammingLanguagesHolder } from '../Programming Languages/ProgrammingLanguagesHolder/ProgrammingLanguagesHolder'
import { OurGoalsHolder } from '../Our Goals/OurGoalsHolder/OurGoalsHolder'
import { ServicesHolder } from '../Our services/OurServicesHolder/ServicesHolder'
import { CoursesHolder } from '../Courses Of The Weekend/CoursesHolder/CoursesHolder'
import { Blogs } from '../Blogs/BlogsHolder/Blogs'
import { Teachers } from '../Teacher OF The Weekend/TeachersHolder/Teachers'

const ContentLandingHolder = (props) => {
  return (
    <>
        <div className={style.contentLanding}>
          <BannerHolder MAndJ={props.MAndJ} />
          <ProgrammingLanguagesHolder />
          <OurGoalsHolder />
          <ServicesHolder />
          <CoursesHolder />
          <Blogs />
          <Teachers />
        </div>
    </>
  )
}

export {ContentLandingHolder}