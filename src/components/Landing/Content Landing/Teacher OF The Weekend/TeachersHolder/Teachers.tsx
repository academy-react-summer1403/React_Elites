import React from 'react'
import style from './Teachers.module.css'
import { Right } from '../TeachersItems/Right'
import { Graphic } from '../TeachersItems/Graphic/Graphic'
import { useGlobalState } from '../../../../../State/State'

const Teachers = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.container} data-theme={darkMode ? "dark" : "lightMode"}>
        <Right />
        <Graphic />

    </div>
  )
}

export {Teachers}