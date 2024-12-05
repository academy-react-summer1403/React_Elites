import React from 'react'
import style from './Bottom.module.css'
import { Likes } from '../BottomItems/Likes'
import { DisLikes } from '../BottomItems/DisLikes'
import { DateEnd } from '../BottomItems/DateEnd'
import { DateStart } from '../BottomItems/DateStart'
import { useGlobalState } from '../../../../../../../State/State'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const Bottom = ({dislikes, likes}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.bottom} data-theme={identifier("dark")}>
      <DisLikes dislikes={dislikes} />
      <Likes likes={likes} />
    </div>
  )
}

export { Bottom}