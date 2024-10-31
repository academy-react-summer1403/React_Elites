import React, { useEffect, useState } from 'react'
import style from "./style.module.css";
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch';
import { useGlobalState } from '../../../../State/State';
import { ReserveCardsList } from './Reserve Grid/index/ReserveCardsList';
import { getCourseReserve } from '../../../../core/services/api/getCourseReserveId';

const StudentMyReserve = () => {
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
            <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>دوره من</h1>
        </div>
        <StudentPanelSearch />
        <div className={style.list} data-theme={darkMode ? "dark" : "lightMode"}> 
            <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
                <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
                <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>نام </div>
                <div className={style.teacherList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> مدرس</div>
                <div className={style.dateStartList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ برگزاری </div>
                <div className={style.dateEndList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ اتمام </div>
                <div className={style.levelList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>سطح </div>
                <div className={style.eyeList}> </div>
            </div>
            <ReserveCardsList userReserveCoursesObj={userReserveCoursesObj} />
        </div>
    </div>
  )
}

export {StudentMyReserve}