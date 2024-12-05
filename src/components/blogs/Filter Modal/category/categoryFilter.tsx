import {Field} from "formik";
import styleFilter from "./../filter.module.css";

import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";

const CategoryFilter = ({setCategoryId, categoryId, categoryList}) => {
  
    const [isClicked, setIsClicked] = useState(false)
    const { t } = useTranslation();

  return (
    <div className={styleFilter.filterDetail}>
        <div className={styleFilter.Flex}>
            <div className={`${styleFilter.filterTextImg} ${styleFilter.filterImgCategory}`} data-theme={identifier("categoryBlogFilter")}/> 
            <p className={styleFilter.filterText} data-theme={identifier("darkNoBG")}>{t("category")} </p>
        </div>
        <div className={styleFilter.filterCategory} data-theme={identifier("dark")}>  {t("CategoryBlogs")}
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