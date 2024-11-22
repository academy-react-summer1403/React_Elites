import React from 'react'
import style from './../../ItemsHolder.module.css'
import { useGlobalState } from '../../../../../../../State/State';

const Status = ({status}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  const identifier = () => {
    if(status === "0"){
      return "تایید نشده"
    }
    else if(status === "1"){
      return "تایید شده"
    }
  }
  return (
    <div className={style.status} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{identifier()}</div>
  )
}

export {Status}