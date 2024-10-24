import React from 'react'
import style from './Top.module.css'
import { Status } from '../TopItems/Status'
import { Level } from '../TopItems/Level'
import { Category } from '../TopItems/Category'
import { Teacher } from '../TopItems/Teacher'
import { useGlobalState } from '../../../../../../../State/State'

const Top = ({views, teacher, category}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.top} data-theme={darkMode ? "dark" : "lightMode"}>

        <Status views={views} />
        <Level />
        <Teacher teacher={teacher} />
        <Category category={category} />
    </div>
  )
}

export { Top}