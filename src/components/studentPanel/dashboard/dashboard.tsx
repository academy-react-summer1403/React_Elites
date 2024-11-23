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
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import { getProfile } from '../../../core/services/api/getProfileInfo';
import { Color } from 'antd/es/color-picker';


const StudentDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [userReserveCoursesObj, setUserReserveCoursesObj] = useState([])
  const [percentage, setpercentage] = useState("")
  const [user, setuser] = useState({})

  const getCourseReserveCall = async () => {
    const userReserveCoursesRes = await getCourseReserve();
    setUserReserveCoursesObj(userReserveCoursesRes)

    let res = await getProfile()
    setpercentage(res.profileCompletionPercentage)
    setuser(res)
  }
  const options = {
    chart: {
      height: 350,
    },
    fill: {
      type: 'solid',
    },
    stroke: {
      lineCap: "round",
    },
    colors: ["#fce803"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "65%",
        },
       
        dataLabels: {
          name: {
            show: false,
            offsetY: -10,
            color: "#888",
            fontSize: "13px"
          },
          value: {
            color: "#111",
            fontSize: "30px",
            show: true
          }
        }
      }
    } 
  },
  series = [Number(percentage)]

  useEffect(() => {
      getCourseReserveCall()
  }, [])

  return (
    <Formik>
      {(form) => (
        <div className={style.page} data-theme={darkMode ? "darkSmall" : "lightMode"}>

          <TopDashboard user={user}/>
          <MyCourseAndStatus options={options}  series={series}/>
          <MyReserveAndComment userReserveCoursesObj={userReserveCoursesObj} />

        </div>
      )
      }
    </Formik >
  )
}

export { StudentDashboard }