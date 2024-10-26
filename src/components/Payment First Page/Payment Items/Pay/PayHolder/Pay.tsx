import React from 'react'
import style from './Pay.module.css'
import { Top } from '../Pay Items/Top'
import { Bottom } from '../Pay Items/Bottom'
import { PaymentImage } from '../Pay Items/PaymentImage'
import { useGlobalState } from '../../../../../State/State'

const Pay = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.pay} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
        <Top />
        <Bottom />
        <PaymentImage />
    </div>
  )
}

export {Pay}