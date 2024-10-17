import React from 'react'
import style from './BannerHolder.module.css'
import { MentorsAndJuniorsHolder } from '../Mentors & Juniors/Mentors&JuniorsHolder/Mentors&JuniorsHolder'
import { ModernLearningHolder } from '../Modern Learning/ModernLearningHolder/ModernLearningHolder'
import { StartFromNowHolder } from '../Start From Now/StartFromNowHolder/StartFromNowHolder'
import { StartFromNowHolderRes } from '../Start From Now copy/StartFromNowHolder/StartFromNowHolder'
import { MentorsAndJuniorsHolderRes } from '../Mentors & Juniors copy/Mentors&JuniorsHolder/Mentors&JuniorsHolder'

const BannerHolder = () => {
  return (
    <>
        <div className={style.banner}>
            <StartFromNowHolder />
            <ModernLearningHolder />
            <MentorsAndJuniorsHolder />
            <MentorsAndJuniorsHolderRes />
            <StartFromNowHolderRes />
        </div>
    </>
  )
}

export {BannerHolder}