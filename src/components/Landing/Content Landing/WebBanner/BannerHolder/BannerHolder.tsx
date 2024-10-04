import React from 'react'
import style from './BannerHolder.module.css'
import { MentorsAndJuniorsHolder } from '../Mentors & Juniors/Mentors&JuniorsHolder/Mentors&JuniorsHolder'
import { ModernLearningHolder } from '../Modern Learning/ModernLearningHolder/ModernLearningHolder'
import { StartFromNowHolder } from '../Start From Now/StartFromNowHolder/StartFromNowHolder'

const BannerHolder = () => {
  return (
    <>
        <div className={style.banner}>
            <StartFromNowHolder />
            <ModernLearningHolder />
            <MentorsAndJuniorsHolder />
        </div>
    </>
  )
}

export {BannerHolder}