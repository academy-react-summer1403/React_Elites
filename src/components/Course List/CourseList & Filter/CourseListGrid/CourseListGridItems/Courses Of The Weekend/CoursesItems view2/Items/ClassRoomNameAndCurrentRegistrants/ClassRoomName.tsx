import React from 'react'
import style from './style.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../../../core/services/Functions/ThemeIdentifier';
const ClassRoomName = (props) => {

  const {t} = useTranslation();
  return (
    <div className={style.classRoom} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>{t("ClassroomNumber")} :{props.classRoomName}</div>
  )
}

export {ClassRoomName}