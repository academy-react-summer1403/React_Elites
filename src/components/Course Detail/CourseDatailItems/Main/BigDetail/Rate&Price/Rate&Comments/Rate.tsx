import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { ClipLoader } from 'react-spinners';
import { Rate } from 'antd';
import { StarFilled } from '@ant-design/icons';

const Ratee = ({rate, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
        <Rate style={{margin: "0 10px 0 10px"}} character={<StarFilled style={{fontSize: "25px"}} />} disabled defaultValue={rate} />
        {isLoading ? <ClipLoader /> : <div className={style.number} data-theme={darkMode ? "darkNoBG" : "lightMode"}>({rate})</div>}
    </>

  )
}

export {Ratee}