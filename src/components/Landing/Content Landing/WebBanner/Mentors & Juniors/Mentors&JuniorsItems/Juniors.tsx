import React from 'react'
import style from './Juniors.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Juniors = (props) => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  
  return (
    <div className={style.container}>
      <div className={style.juniors}></div>
      <div className={style.studentCount}  data-theme={darkMode ? "dark" : "lightMode"}> + {Math.floor(props.studentCount.studentCount)} </div>
      <div className={style.title}  data-theme={ darkMode ? "dark" : "lightMode"}>{t("ActiveStudentBanner")}</div>

    </div>
  )
}

export {Juniors}