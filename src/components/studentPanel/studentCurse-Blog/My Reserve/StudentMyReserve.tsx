import React, { useEffect, useState } from 'react'
import style from "./style.module.css";
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch';

import { ReserveCardsList } from './Reserve Grid/index/ReserveCardsList';
import { getCourseReserve } from '../../../../core/services/api/getCourseReserveId';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
const StudentMyReserve = () => {
    const { t } = useTranslation();
  
    const [userReserveCoursesObj, setUserReserveCoursesObj] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getCourseReserveCall = async () => {
      const userReserveCoursesRes = await getCourseReserve();
      setUserReserveCoursesObj(userReserveCoursesRes)
      setisLoading(false)
    }
  
    useEffect(() => {
      getCourseReserveCall()
    }, [])
    
  return (
    <div className={style.page2}>
        <div className={style.titleHolder}>
            <h1 className={style.titleHeaderTopStudent} data-theme={identifier("darkNoBG")}>{t("MyReservation")}</h1>
        </div>
        <StudentPanelSearch />
        <div className={style.list} data-theme={identifier("dark")}> 
            <div className={style.headerList} data-theme={identifier("darkSmall")}>
                <div className={style.imgList} data-theme={identifier("darkNoBG")}># </div>
                <div className={style.nameList} data-theme={identifier("darkNoBG")}>{t("name")} </div>
                <div className={style.teacherList} data-theme={identifier("darkNoBG")}> {t("lecturer")}</div>
                <div className={style.dateStartList} data-theme={identifier("darkNoBG")}>{t("HoldingDate")} </div>
                <div className={style.dateEndList} data-theme={identifier("darkNoBG")}>{t("CompletionDate")} </div>
                <div className={style.levelList} data-theme={identifier("darkNoBG")}> {t("status")}</div>
                <div className={style.eyeList}> </div>
            </div>
            <ReserveCardsList isLoading={isLoading} userReserveCoursesObj={userReserveCoursesObj} />
        </div>
    </div>
  )
}

export {StudentMyReserve}