import React from 'react'
import style from './Title.module.css'
import { useGlobalState } from '../../../../../../State/State';
import {  NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/BeatLoader";
import BeatLoader from 'react-spinners/BeatLoader';

const Title = ({title, isLoading, id}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.titleHolder}>
      {isLoading ? <BeatLoader /> : 
      <>
            <div className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{title}</div>
            <NavLink className={style.CompareButton} to={"/Compare-products-select/" +id}>مقایسه دوره</NavLink>
      </>}
    </div>
  )
}

export {Title}