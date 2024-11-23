import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import { useGlobalState } from "../../../../State/State";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const CategoryFilter = ({setCategoryId, categoryId}) => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [isClicked, setIsClicked] = useState(false)
    const { t } = useTranslation();

  return (
    <div className={styleFilter.filterDetail}>
        <div className={styleFilter.Flex}>
            <div className={`${styleFilter.filterTextImg} ${styleFilter.filterImgCategory}`} data-theme={darkMode ? "categoryBlogFilter" : "lightMode"}/> 
            <p className={styleFilter.filterText} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("category")} </p>
        </div>
        <div className={styleFilter.filterCategory} data-theme={darkMode ? "dark" : "lightMode"}>  {t("CategoryBlogs")}
            <div className={isClicked ? styleFilter.arrowUp : styleFilter.arrowDown} onClick={() => setIsClicked(!isClicked)}></div>
            {isClicked && 
            <div className={styleFilter.filterBox}>
                <input type="radio" id='one' name='categories' className={styleFilter.input} onChange={() => {
                    setCategoryId("2")
                    console.log(categoryId)
                }}/>
                <label htmlFor='one' className={styleFilter.category}> دیتای بک اند هک شد 😘 </label>
                <input type="radio" id='two' name='categories' className={styleFilter.input} onChange={() => {
                    setCategoryId("3")
                }} />
                <label htmlFor='two' className={styleFilter.category}> hvddd </label>
            </div>}
        </div>
    </div>
)
}
export{CategoryFilter}