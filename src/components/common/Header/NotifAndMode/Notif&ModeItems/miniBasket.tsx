import React, { useEffect, useState } from 'react'
import style from '../../../../../Style/NavBarItems.module.css'
import { useGlobalState } from '../../../../../State/State';
import miniBasketImg from '../../../../../assets/Images/FigmaCourse.png';
import { NavLink } from 'react-router-dom'
import { getCourseReserve } from '../../../../../core/services/api/getCourseReserveId';
import { dateConvertor } from '../../../../../core/services/Functions/DateMiladi';
import { ReserveCourses } from './ReserveCourses';
import { getMyCourse } from '../../../../../core/services/api/getMyCourse';

const MiniBasket = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [coursesArr, setcoursesArr] = useState([])
  const getCourses = async () => {
    let res = await getMyCourse()
    setcoursesArr(res.listOfMyCourses)
  }
  useEffect(() => {
    getCourses()
  }, [])
  return (
    <>
        <NavLink to="/Student-Panel/Shopping-Basket" className={style.miniBasketHolder}  data-theme={darkMode ? "minibasket" : "lightMode"}>  
              <div  className={style.miniBasket}> 
                <div className={style.holderMiniBasketOveral}>
                  <div className={style.titleMiniBasketCount}> تعداد دوره در سبد : {coursesArr.length} </div>
                  <div className={style.miniBasketItems}>
                    {coursesArr.map((item, index) => {
                      return (
                      <ReserveCourses
                      reserverDate={item.reserverDate}
                      id={item.courseId}
                      />
                      )
                    })}
                  </div>
                  <div className={style.buttonHolder}>	
                    <NavLink className={style.button} to="/Student-Panel/Shopping-Basket"> نمایش سبد و پرداخت</NavLink>					
                  </div>				
                </div>
              </div>
        </NavLink>
    </>
  )
}

export {MiniBasket};