import React, { useEffect, useState } from 'react'
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch'
import { FavCoursesCardsList } from './Fav Courses Grid/index/FavCoursesCardsList'
import style from "./style.module.css";
import { useGlobalState } from '../../../../State/State';
import { getFavCourses } from '../../../../core/services/api/getFavCourses';
import { useTranslation } from 'react-i18next';

const StudentMyFavCourses = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [userFavcoursesObj, setuserFavcoursesObj] = useState([])

  const getFavCoursesCall = async () => {
    const userFavouriteCoursesRes = await getFavCourses();
    setuserFavcoursesObj(userFavouriteCoursesRes.favoriteCourseDto)
    console.log(userFavcoursesObj)
  }

  useEffect(() => {
    getFavCoursesCall()
  }, [])
  
  
  return (
    <div className={style.page2}>
      <div className={style.titleHolder}>
        <h1 className={style.titleHeaderTopStudent} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("FavoriteCourses")}</h1>
      </div>
      <StudentPanelSearch />
      <div className={style.list} data-theme={darkMode ? "dark" : "lightMode"}> 
        <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
          <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
          <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("name")} </div>
          <div className={style.teacherList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("lecturer")}</div>
          <div className={style.dateLastUpdate} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("lastChangeDate")} </div>
          <div className={style.viewList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("type")}  </div>
          <div className={style.levelList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("level")} </div>
          <div className={style.eyeList}> </div>
        </div>
        <FavCoursesCardsList userFavcoursesObj={userFavcoursesObj} />
      </div>
    </div>
  )
}

export {StudentMyFavCourses}