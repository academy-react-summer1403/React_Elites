import React from 'react'
import style from './../../ItemsHolder.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Status = ({status}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  const ali = () => {
    if(status === "0"){
      return "تایید نشده"
    }
    else if(status === "1"){
      return "تایید شده"
    }
  }
  return (
    <div className={style.status} data-theme={identifier("darkNoBG")}>{ali()}</div>
  )
}

export {Status}