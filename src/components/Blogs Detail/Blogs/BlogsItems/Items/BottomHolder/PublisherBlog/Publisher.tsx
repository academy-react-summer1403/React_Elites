import React from 'react'
import style from './Publisher.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';

const Publisher = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.publisher} data-theme={identifier("dark")}>{props.pub}</div>
  )
}

export {Publisher}