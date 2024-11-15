import React, { useEffect, useState } from 'react'
import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../State/State";
import { ListCardBlogs } from '../studentCurse-Blog/My Courses/Courses Grid/index/CoursesCardsList';
import { ReserveCardsList } from '../studentCurse-Blog/My Reserve/Reserve Grid/index/ReserveCardsList';
import { NavLink } from 'react-router-dom';
import { getCourseReserve } from '../../../core/services/api/getCourseReserveId';

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
          <div className={style.TopDashboard}>
            <div className={style.rightTopDashboard}>
              <div className={style.TopRightTopDashboard}>
                <h1>سلام پارسا ، روزت بخیر👋</h1>
                <p>امیدوارم امروز روز خوبی رو داشته باشید</p>
              </div>
              <div className={style.BottomRightTopDashboard}>
                <div className={style.clock}>
                  <div className={style.icon}></div>
                  <div className={style.clockItem}>
                    <p>ساعت</p>
                    <h1>20:20</h1>
                  </div>
                </div>
                <div className={style.date}>
                  <div className={style.icon}></div>
                  <div className={style.dateItem}>
                    <p>تاریخ</p>
                    <h1>29 اردیبهشت 1403</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.leftTopDashboard}>
              <h1>سلام ، من پارسام <br />اینم بیو پروفایلمه واقعا نمیدونم چی بنویسم خودتون بیایید منو بشناسید حال ندارم بخدا خستم</h1>
            </div>
          </div>
          <div className={style.MyCourseAndStatus}>
            <div className={style.listMyCoursesDashboard} data-theme={darkMode ? "dark" : "lightMode"}>
              <div className={style.titleHeaderMyCourseList}>
                <h1>دوره من</h1>
                <NavLink to='/Student-Panel/My-courses'>مشاهده بیشتر &gt;</NavLink>
              </div>
              <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
                <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
                <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>نام </div>
                <div className={style.teacherList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> مدرس</div>
                <div className={style.dateStartList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ برگزاری </div>
                <div className={style.levelList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>سطح </div>
                <div className={style.eyeList}> </div>
              </div>
              <ListCardBlogs />
            </div>
            <div className={style.statusDashboard}>
              <div className={style.topStatusDashboard}>
                <h1>وضعیت اطلاعات حساب کاربری</h1>
                <NavLink to='/Student-Panel/Information'> </NavLink>
              </div>
              <div className={style.middleStatusDashboard}>
                <div>
                  <div>70%</div>
                </div>
              </div>
              <div className={style.bottomStatusDashboard}>
                <h1>اطلاعات حساب کاربری شما کامل نیست</h1>
              </div>
            </div>
          </div>
          <div className={style.MyReserveAndComment}>
            <div className={style.listMyReserveDashboard} data-theme={darkMode ? "dark" : "lightMode"}>
              <div className={style.titleHeaderMyCourseList}>
                <h1>رزرو من</h1>
                <NavLink to='/Student-Panel/My-courses'>مشاهده بیشتر &gt;</NavLink>
              </div>
              <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
                <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
                <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>نام </div>
                <div className={style.teacherList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> مدرس</div>
                <div className={style.dateStartList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>وضعیت </div>
                <div className={style.eyeList}> </div>
              </div>
              <ReserveCardsList userReserveCoursesObj={userReserveCoursesObj} />
            </div>
            <div className={style.statusDashboard}>
              <div className={style.topStatusDashboard}>
                <h1>وضعیت اطلاعات حساب کاربری</h1>
                <NavLink to='/Student-Panel/Information'> </NavLink>
              </div>
              <div className={style.middleStatusDashboard}>
                <div>
                  <div>70%</div>
                </div>
              </div>
              <div className={style.bottomStatusDashboard}>
                <h1>اطلاعات حساب کاربری شما کامل نیست</h1>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </Formik >
  )
}

export { StudentDashboard }