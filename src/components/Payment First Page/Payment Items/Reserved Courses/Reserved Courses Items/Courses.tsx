import React from 'react'
import style from './Items.module.css'
import { Image } from './Image'
import { Title } from './Title'
import { Price } from './Price'
import { useGlobalState } from '../../../../../State/State'

const Courses = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.coursesHolder} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <Price />
        <Title />
        <Image />
    </div>
  )
}

export {Courses}