import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { Rate } from "antd";
import { ClipLoader } from 'react-spinners';
import { StarFilled } from '@ant-design/icons';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Ratee = ({rate, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
  <Rate character={<StarFilled style={{fontSize: "25px"}} /> } defaultValue={rate} disabled/>
      {isLoading ? <ClipLoader /> : <div className={style.number} data-theme={identifier("dark")}>({rate})</div>}
    </>

  )
}

export {Ratee}