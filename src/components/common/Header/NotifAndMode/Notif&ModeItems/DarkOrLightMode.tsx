import React, { useState } from 'react'
import style from '../../../../../Style/DarkOrLightMode.module.css'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
import { useGlobalState } from '../../../../../State/State';
const DarkOrLightMode = () => {

  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <>
        <input type='checkbox' id="check" className={style.inputToggle} onChange={() => {
          setDarkMode(!darkMode)
        }}/>
        <label htmlFor='check' className={style.DarkOrLight} data-theme={identifier("darkOrLight")}></label>
    </>
  )
}

export {DarkOrLightMode}