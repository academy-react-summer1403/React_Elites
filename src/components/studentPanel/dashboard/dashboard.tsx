import React, { useEffect, useState } from 'react'
import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../State/State";
import { ListCardBlogs } from '../studentCurse-Blog/My Courses/Courses Grid/index/CoursesCardsList';
import { ReserveCardsList } from '../studentCurse-Blog/My Reserve/Reserve Grid/index/ReserveCardsList';
import { NavLink } from 'react-router-dom';
import { getCourseReserve } from '../../../core/services/api/getCourseReserveId';
import { TopDashboard } from './Items/TopDashboard';
import { MyCourseAndStatus } from './Items/MyCourseAndStatus';
import { MyReserveAndComment } from './Items/MyReserveAndComment';

const StudentDashboard = () => {
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
    <Formik>
      {(form) => (
        <div className={style.page} data-theme={darkMode ? "darkSmall" : "lightMode"}>
          <TopDashboard />
          <MyCourseAndStatus />
          <MyReserveAndComment userReserveCoursesObj={userReserveCoursesObj} />
        </div>
      )
      }
    </Formik >
  )
}

export { StudentDashboard }