import React from 'react'
import style from './ContentLandingHolder.module.css'
import { BannerHolder } from '../WebBanner/BannerHolder/BannerHolder'
import { ProgrammingLanguagesHolder } from '../Programming Languages/ProgrammingLanguagesHolder/ProgrammingLanguagesHolder'
import { OurGoalsHolder } from '../Our Goals/OurGoalsHolder/OurGoalsHolder'
import { ServicesHolder } from '../Our services/OurServicesHolder/ServicesHolder'

const ContentLandingHolder = () => {
  return (
    <>
        <div className={style.contentLanding}>
          <BannerHolder />
          <ProgrammingLanguagesHolder />
          <OurGoalsHolder />
          <ServicesHolder />
        </div>
    </>
  )
}

export {ContentLandingHolder}