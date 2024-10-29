import React, { useState } from 'react'
import style from './Top.module.css'
import { CourseFilterHolder } from './Filter Modal/CourseFilterHolder/CourseFilterHolder'
import { SortModal } from './Sort Modal/SortModal'
import { useGlobalState } from '../../../../../../State/State'

const TopItems = ({clicked, setClicked, sortModal, setSortModal, setSortType, setCol, applySort, setapplySort}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [isClicked4, setIsClicked4] = useState(false)
  return (
    <>
        <div className={isClicked1 ? style.selected : style.categories} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
          setCol("insertDate")
          setapplySort(true)
          setIsClicked1(!isClicked1)
          setIsClicked2(false)
          setIsClicked3(false)
          setIsClicked4(false)
          if(applySort === false){
            setapplySort(true)
          }
          setSortType("DESC")}}>جدید ترین</div>
        <div className={isClicked2 ? style.selected : style.categories} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
          setCol("insertDate")
          setapplySort(true)
          setIsClicked1(false)
          setIsClicked2(!isClicked2)
          setIsClicked3(false)
          setIsClicked4(false)
          setSortType("ASC")}}> قدیمی ترین </div>
        <div className={isClicked3 ? style.selected : style.categories} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
          setCol("Cost")
          setapplySort(true)
          setIsClicked1(false)
          setIsClicked2(false)
          setIsClicked3(!isClicked3)
          setIsClicked4(false)
          setSortType("DESC")}}> گران ترین</div>
        <div className={isClicked4 ? style.selected : style.categories} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
          setCol("Cost")
          setapplySort(true)
          setIsClicked1(false)
          setIsClicked2(false)
          setIsClicked3(false)
          setIsClicked4(!isClicked4)
          setSortType("ASC")}}>ارزان ترین</div>
          <div className={style.categories} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
          setapplySort(false)
          setIsClicked1(false)
          setIsClicked2(false)
          setIsClicked3(false)
          setIsClicked4(false)
        }}>
            پاک کردن مرتب سازی
          </div>

        <div className={style.filterResponsive} onClick={() => {
          if(clicked == false){
            setClicked(true)
          }
          else if(clicked == true){
            setClicked(false)
          }
        }}>فیلتر
        </div>
        {clicked && <CourseFilterHolder clicked={clicked} setClicked={setClicked} />}

        <div className={style.sortResponsive} onClick={() => {
          if(sortModal == false){
            setSortModal(true)
          }
          else if(sortModal == true){
            setSortModal(false)
          }
        }} >ترتیب
        </div>
        {sortModal && <SortModal sortModal={sortModal} setSortModal={setSortModal} />}
        
    </>
  )
}

export {TopItems}