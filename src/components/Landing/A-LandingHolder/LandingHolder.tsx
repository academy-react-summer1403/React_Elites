import React, { useEffect, useState } from 'react'
import style from './LandingHolder.module.css'
import { ContentLandingHolder } from '../Content Landing/ContentLandingHolder/ContentLandingHolder'
import {getStudentAndTeacherCount} from '../../../core/services/api/StudentAndTeacher.ts'
import { useGlobalState } from '../../../State/State.tsx'

const LandingHolder = () => {
  const [MAndJ, setMAndJ] = useState([])

  const getSAndT = async () => {
    const SAndT = await getStudentAndTeacherCount();
    setMAndJ(SAndT)
  }

  useEffect(() => {
    getSAndT();
  }, [])

  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  
  return (
    <>
        <div className={style.landing} data-theme={darkMode ? "dark" : "light"}>
          <ContentLandingHolder
            MAndJ={MAndJ}
          />
        </div>
    </>
  )
}

export {LandingHolder}