import React, { useState } from 'react'
import style from './Top.module.css'
import { CourseFilterHolder } from './Filter Modal/CourseFilterHolder/CourseFilterHolder'
import { SortModal } from './Sort Modal/SortModal'

const TopItems = ({clicked, setClicked, sortModal, setSortModal}) => {
  return (
    <>
        <div className={style.categories}>جدید ترین</div>
        <div className={style.categories}>محبوب ترین</div>
        <div className={style.categories}> گران ترین</div>
        <div className={style.categories}>ارزان ترین</div>

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