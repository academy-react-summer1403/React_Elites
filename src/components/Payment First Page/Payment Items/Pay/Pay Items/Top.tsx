import React from 'react'
import style from './Items.module.css'
import { Price } from './Price'
import { TextAndNumber } from './TextAndNumber'
import { useGlobalState } from '../../../../../State/State'

const Top = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.top} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <TextAndNumber />
        <Price />
    </div>
  )
}

export {Top}