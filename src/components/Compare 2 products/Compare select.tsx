import style from "../../Style/Compare.module.css";
import { useGlobalState } from '../../State/State';
import { useTranslation } from 'react-i18next';
import { Search } from './Items/Serach';
import React, { useEffect, useState } from 'react'
import { allCourseList } from "../../core/services/api/AllCourseList";

const CompareSelect = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState("")
  const [isSearched, setIsSearched] = useState(false)

  return (
    <div className={style.Holder} data-theme={darkMode ? "dark" : "lightMode"}>
      <div className={style.Images}> 
        <img className={style.imageProgramming} src='https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg' />
        
        <Search setSearchValue={setSearchValue} setIsSearched={setIsSearched} searchValue={searchValue} isSearched={isSearched} />
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>نام دوره</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>والیبال</div>
 
          
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>سایر توضیحات</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>توضیحات اول</div>
 
          
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>قیمت</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>1000تومان</div>
 
         
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>تعداد لایک ها</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>198</div>
 
          
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>وضعیت</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>در حال برگزاری</div>
 
          
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>سطح آموزشی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>مبتدی</div>
 
          
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>دسته بندی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>بک اند</div>
 
          
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>نام استاد</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>نوید</div>
 

        </div>
      </div>
    </div>
  )
}

export { CompareSelect }