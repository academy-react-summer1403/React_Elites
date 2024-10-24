import React from 'react'
import style from './Bottom.module.css'
import { Likes } from '../BottomItems/Likes'
import { DisLikes } from '../BottomItems/DisLikes'
import { DateEnd } from '../BottomItems/DateEnd'
import { DateStart } from '../BottomItems/DateStart'
import { useGlobalState } from '../../../../../../../State/State'


const Bottom = ({dislikes, likes}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.bottom} data-theme={darkMode ? "dark" : "lightMode"}>
      <DisLikes dislikes={dislikes} />
      <Likes likes={likes} />
    </div>
  )
}

export { Bottom}