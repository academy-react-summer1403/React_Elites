import React from 'react'
import style from './ContentLandingHolder.module.css'
import { BannerHolder } from '../WebBanner/BannerHolder/BannerHolder'

const ContentLandingHolder = () => {
  return (
    <>
        <div className={style.contentLanding}>
          <BannerHolder />
        </div>
    </>
  )
}

export {ContentLandingHolder}