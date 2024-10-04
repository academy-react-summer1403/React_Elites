import React from 'react'
import style from './ContentLandingHolder.module.css'
import { BannerHolder } from '../WebBanner/BannerHolder/BannerHolder'
import { ProgrammingLanguagesHolder } from '../Programming Languages/ProgrammingLanguagesHolder/ProgrammingLanguagesHolder'
import { OurGoalsHolder } from '../Our Goals/OurGoalsHolder/OurGoalsHolder'
import { ServicesHolder } from '../Our services/OurServicesHolder/ServicesHolder'
import { CoursesHolder } from '../Courses Of The Weekend/CoursesHolder/CoursesHolder'
import { Blogs } from '../Blogs/BlogsHolder/Blogs'

const ContentLandingHolder = () => {
  return (
    <>
        <div className={style.contentLanding}>
          <BannerHolder />
          <ProgrammingLanguagesHolder />
          <OurGoalsHolder />
          <ServicesHolder />
          <CoursesHolder />
          <Blogs />
        </div>
    </>
  )
}

export {ContentLandingHolder}