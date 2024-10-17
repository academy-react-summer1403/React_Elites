import React, { useEffect, useState } from 'react'
import style from './LandingHolder.module.css'
import { ContentLandingHolder } from '../Content Landing/ContentLandingHolder/ContentLandingHolder'
import axios from 'axios'

const LandingHolder = () => {
  const [MAndJ, setMAndJ] = useState([])

  const getCourseList = async () => {
    const result = await axios.get('https://classapi.sepehracademy.ir/api/Home/LandingReport')
    setMAndJ(result.data)
  };

  useEffect(() => {
    getCourseList();
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