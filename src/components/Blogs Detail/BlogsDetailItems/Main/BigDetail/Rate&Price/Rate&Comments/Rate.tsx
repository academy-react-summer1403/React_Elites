import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { Rate } from "antd";

const Ratee = ({rate}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
      <Rate defaultValue={rate} disabled />
      <div className={style.number} data-theme={darkMode ? "dark" : "lightMode"}>({rate})</div>
    </>

  )
}

export {Ratee}