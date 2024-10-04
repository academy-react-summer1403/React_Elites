import React from 'react'
import style from './LandingHolder.module.css'
import { ContentLandingHolder } from '../Content Landing/ContentLandingHolder/ContentLandingHolder'

const LandingHolder = () => {
  return (
    <>
        <div className={style.landing}>
          <ContentLandingHolder />
        </div>
    </>
  )
}

export {LandingHolder}