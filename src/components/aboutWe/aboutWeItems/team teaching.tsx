import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const TeamTeaching = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={style.holderP}>
      <span data-theme={identifier("dark")}>{t("aboutUsTitle4")}</span>
      <div className={style.holderGap}>
        <p className={style.courseCounts} data-theme={identifier("darkNoBGDisc")}>{t("aboutUsDesc6")} </p> 
        <p className={style.courseCounts} data-theme={identifier("darkNoBGDisc")}>{t("aboutUsDesc7")} </p> 
      </div>
    </div>  
  )
}

export {TeamTeaching}