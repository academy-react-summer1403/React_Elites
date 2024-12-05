import React from 'react'
import style from './Title.module.css'

import {  NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/BeatLoader";
import BeatLoader from 'react-spinners/BeatLoader';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Title = ({title, isLoading, id}) => {

  return (
    <div className={style.titleHolder}>
      {isLoading ? <BeatLoader /> : 
      <>
            <div className={style.title} data-theme={identifier("darkNoBG")}>{title}</div>
            <NavLink className={style.CompareButton} to={"/Compare-products-select/" +id}>مقایسه دوره</NavLink>
      </>}
    </div>
  )
}

export {Title}