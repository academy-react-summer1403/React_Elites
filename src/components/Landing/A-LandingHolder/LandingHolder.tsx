import React, { useEffect, useState } from 'react'
import style from './LandingHolder.module.css'
import { ContentLandingHolder } from '../Content Landing/ContentLandingHolder/ContentLandingHolder'
import axios from 'axios'
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
  
  return (
    <>
        <div className={style.landing}>
          <ContentLandingHolder
            MAndJ={MAndJ}
          />
        </div>
    </>
  )
}

export {LandingHolder}