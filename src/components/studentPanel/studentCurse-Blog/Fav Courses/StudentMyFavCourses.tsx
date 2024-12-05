import React, { useEffect, useState } from 'react'
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch'
import { FavCoursesCardsList } from './Fav Courses Grid/index/FavCoursesCardsList'
import style from "./style.module.css";
import { useGlobalState } from '../../../../State/State';
import { getFavCourses } from '../../../../core/services/api/getFavCourses';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
const StudentMyFavCourses = () => {
  const { t } = useTranslation();
  const [isLoading, setisLoading] = useState(true)
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [userFavcoursesObj, setuserFavcoursesObj] = useState([])

  const getFavCoursesCall = async () => {
    const userFavouriteCoursesRes = await getFavCourses();
    setuserFavcoursesObj(userFavouriteCoursesRes.favoriteCourseDto)
    
    setisLoading(false)
  }

  useEffect(() => {
    getFavCoursesCall()
  }, [])
  
  
  return (
    <div className={style.page2}>
      <div className={style.titleHolder}>
        <h1 className={style.titleHeaderTopStudent} data-theme={identifier("darkNoBG")}>{t("FavoriteCourses")}</h1>
      </div>
      <StudentPanelSearch />
      <div className={style.list} data-theme={identifier("dark")}> 
        <div className={style.headerList} data-theme={identifier("darkSmall")}>
          <div className={style.imgList} data-theme={identifier("darkNoBG")}># </div>
          <div className={style.nameList} data-theme={identifier("darkNoBG")}>{t("name")} </div>
          <div className={style.teacherList} data-theme={identifier("darkNoBG")}> {t("lecturer")}</div>
          <div className={style.dateLastUpdate} data-theme={identifier("darkNoBG")}>{t("lastChangeDate")} </div>
          <div className={style.viewList} data-theme={identifier("darkNoBG")}> {t("type")}  </div>
          <div className={style.levelList} data-theme={identifier("darkNoBG")}>{t("level")} </div>
          <div className={style.eyeList}> </div>
        </div>
        <FavCoursesCardsList userFavcoursesObj={userFavcoursesObj} isLoading={isLoading} />
      </div>
    </div>
  )
}

export {StudentMyFavCourses}