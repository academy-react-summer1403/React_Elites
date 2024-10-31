import React, { useEffect, useState } from 'react'
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch'
import { FavCoursesCardsList } from './Fav Courses Grid/index/FavCoursesCardsList'
import style from "./../../../../Style/studentPanel.module.css";
import { useGlobalState } from '../../../../State/State';
import { getFavCourses } from '../../../../core/services/api/getFavCourses';

const StudentMyFavCourses = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [userFavcoursesObj, setuserFavcoursesObj] = useState([])

  const getFavCoursesCall = async () => {
    const userFavouriteCoursesRes = await getFavCourses();
    setuserFavcoursesObj(userFavouriteCoursesRes.favoriteCourseDto)
  }

  useEffect(() => {
    getFavCoursesCall()
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
        <FavCoursesCardsList userFavcoursesObj={userFavcoursesObj} />
      </div>
    </div>
  )
}

export {StudentMyFavCourses}