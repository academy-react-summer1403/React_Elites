import React from 'react'
import style from './Mentors.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Mentors = (props) => {
  const {t} = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.mentors}></div>
      <div className={style.teacherCount}  data-theme={identifier("dark","dark2")}> + {props.teacherCount.teacherCount} </div>
      <div className={style.title}  data-theme={identifier("dark","dark2")}>{t("BestTeacherBanner")}</div>
    </div>
  )
}

export {Mentors}