import React from 'react'
import style from './Title.module.css'

import {  NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/BeatLoader";
import BeatLoader from 'react-spinners/BeatLoader';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const Title = ({title, isLoading, id}) => {
  const { t } = useTranslation();
  return (
    <div className={style.titleHolder}>
      {isLoading ? <BeatLoader /> : 
      <>
            <div className={style.title} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{title}</div>
            <NavLink className={style.CompareButton} to={"/Compare-products-select/" +id}>{t("CompareCourse")}</NavLink>
      </>}
    </div>
  )
}

export {Title}