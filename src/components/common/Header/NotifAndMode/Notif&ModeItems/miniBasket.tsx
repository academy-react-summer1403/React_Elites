import React, { useEffect, useState } from 'react'
import { Modal } from 'antd';
import style from '../../../../../Style/NavBarItems.module.css'
import { useGlobalState } from '../../../../../State/State';
import { NavLink } from 'react-router-dom'
import { ReserveCourses } from './ReserveCourses';
import { getMyCourse } from '../../../../../core/services/api/getMyCourse';

const MiniBasket = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [coursesArr, setcoursesArr] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getCourses = async () => {
    let res = await getMyCourse()
    setcoursesArr(res.listOfMyCourses)
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    getCourses()
  }, [])
  return (
    <>
      <div className={style.miniBasketHolder} data-theme={darkMode ? "minibasket" : "lightMode"} onClick={showModal}>
        <Modal closeIcon={null} footer={null} width={400} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{overflow: "scroll", height: "511px"}}>
          <div className={style.miniBasket}>
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
        </Modal>
      </div>
    </>
  )
}

export { MiniBasket };