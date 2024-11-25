import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import { useGlobalState } from "../../../../State/State";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const CategoryFilter = ({setCategoryId, categoryId, categoryList}) => {
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
                {categoryList.map((item, index) => {
                    return(
                        <>
                        <input type="radio" id={index} name='categories' className={styleFilter.input} onChange={() => {
                            setCategoryId(item.id)
                        }}/>
                        <label htmlFor={index} className={styleFilter.category}>{item.categoryName}</label>
                        </>
                    )
                })}
            </div>}
        </div>
    </div>
)
}
export{CategoryFilter}