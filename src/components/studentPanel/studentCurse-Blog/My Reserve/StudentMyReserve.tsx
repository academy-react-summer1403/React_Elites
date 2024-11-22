import React, { useEffect, useState } from 'react'
import style from "./style.module.css";
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch';
import { useGlobalState } from '../../../../State/State';
import { ReserveCardsList } from './Reserve Grid/index/ReserveCardsList';
import { getCourseReserve } from '../../../../core/services/api/getCourseReserveId';
import { useTranslation } from 'react-i18next';

const StudentMyReserve = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [userReserveCoursesObj, setUserReserveCoursesObj] = useState([])

    const getCourseReserveCall = async () => {
      const userReserveCoursesRes = await getCourseReserve();
      setUserReserveCoursesObj(userReserveCoursesRes)
    }
  
    useEffect(() => {
      getCourseReserveCall()
    }, [])
    
  return (
    <div className={style.page2}>
        <div className={style.titleHolder}>
            <h1 className={style.titleHeaderTopStudent} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("MyReservation")}</h1>
        </div>
        <StudentPanelSearch />
        <div className={style.list} data-theme={darkMode ? "dark" : "lightMode"}> 
            <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
                <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
                <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("name")} </div>
                <div className={style.teacherList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("lecturer")}</div>
                <div className={style.dateStartList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("HoldingDate")} </div>
                <div className={style.dateEndList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("CompletionDate")} </div>
                <div className={style.levelList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("status")}</div>
                <div className={style.eyeList}> </div>
            </div>
            <ReserveCardsList userReserveCoursesObj={userReserveCoursesObj} />
        </div>
    </div>
  )
}

export {StudentMyReserve}