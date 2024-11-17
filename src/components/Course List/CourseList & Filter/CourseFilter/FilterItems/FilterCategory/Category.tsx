import React, { useEffect, useState } from 'react'
import style from './Category.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from "react-i18next";
import { getCategoriesList } from '../../../../../../core/services/api/getCategoriesList';

const Category = ({setcategoryId}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isClicked, setIsClicked] = useState(false)
  const [categoriesList, setCategoriesList] = useState([])
  const { t } = useTranslation();

  const getCategoriesListCall = async () => {
    let res = await getCategoriesList()
    setCategoriesList(res)
  }

  useEffect(() => {
    getCategoriesListCall()
  }, [])
  

  return (
    <>
        <div className={style.titleCat} data-theme={darkMode ? "cat" : "lightMode"}> {t("category")} </div>
        <div className={style.cat1} data-theme={darkMode ? "dark" : "lightMode"}>دسته مورد نظر را انتخاب کنید
          <div className={isClicked ? style.arrowUp : style.arrowDown} onClick={() => setIsClicked(!isClicked)}></div>
          {isClicked && <div className={style.filterCategory}>
            {categoriesList.map((item, index) => {
              return (
                <>
                  <input type="checkbox" id={String(index)} name='teachers' className={style.input} onChange={() => {
                    setcategoryId([item.id]);
                  }}/>
                  <label htmlFor={String(index)} className={style.filter}>{item.techName}</label>
                </>
              )
            })}
          </div>}
        </div>
    </>
  )
}

export {Category}