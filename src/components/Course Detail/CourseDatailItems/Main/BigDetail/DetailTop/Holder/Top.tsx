import React from 'react'
import style from './Top.module.css'
import { Status } from '../TopItems/Status'
import { Level } from '../TopItems/Level'
import { Category } from '../TopItems/Category'
import { Teacher } from '../TopItems/Teacher'
import { useGlobalState } from '../../../../../../../State/State'

const Top = ({status, teacher, category, level}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.top} data-theme={darkMode ? "dark" : "lightMode"}>
        <Teacher teacher={teacher} />
        <Category category={category} />
        <Level level={level} />
        <Status status={status} />
    </div>
  )
}

export { Top}