import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const ClassRoomName = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.classRoom} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>{t("ClassroomNumber")} :{props.classRoomName}</div>
  )
}

export {ClassRoomName}