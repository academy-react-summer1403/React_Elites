import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { Rate } from "antd";
import { ClipLoader } from 'react-spinners';

const Ratee = ({rate, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
      <Rate defaultValue={rate} disabled />
      {isLoading ? <ClipLoader /> : <div className={style.number} data-theme={darkMode ? "dark" : "lightMode"}>({rate})</div>}
    </>

  )
}

export {Ratee}