import React, { useEffect, useState } from 'react'
import style from './LandingHolder.module.css'
import { ContentLandingHolder } from '../Content Landing/ContentLandingHolder/ContentLandingHolder'
import {getStudentAndTeacherCount} from '../../../core/services/api/StudentAndTeacher.ts'
import styleDark from './../../../Style/DarkMode.module.css'

const LandingHolder = () => {
  const [MAndJ, setMAndJ] = useState([])

  const getSAndT = async () => {
    const SAndT = await getStudentAndTeacherCount();
    setMAndJ(SAndT)
  }

  useEffect(() => {
    getSAndT();
  }, [])
  
  return (
    <>
        <div className={`${style.landing} ${styleDark.landingDark}`}>
          <ContentLandingHolder
            MAndJ={MAndJ}
          />
        </div>
    </>
  )
}

export {LandingHolder}