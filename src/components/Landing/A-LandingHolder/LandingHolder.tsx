import React, { useEffect, useState } from 'react'
import style from './LandingHolder.module.css'
import { ContentLandingHolder } from '../Content Landing/ContentLandingHolder/ContentLandingHolder'
import {getStudentAndTeacherCount} from '../../../core/services/api/StudentAndTeacher.ts'

const LandingHolder = () => {
  const [MAndJ, setMAndJ] = useState([])

  const getSAndT = async () => {
    const SAndT = await getStudentAndTeacherCount();
    setMAndJ(SAndT)
  }

  useEffect(() => {
    getSAndT();
  }, [])

  const [isDark, setIsDark] = useState(true)
  
  return (
    <>
        <div className={style.landing} data-theme={isDark ? "dark" : "light"}>
          <ContentLandingHolder
            MAndJ={MAndJ}
          />
        </div>
    </>
  )
}

export {LandingHolder}