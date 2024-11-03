import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import { useGlobalState } from "../../../../State/State";

const CategoryFilter = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleFilter.filterDetail}>
        <div className="flex gap-1.5">
            <div className={`${styleFilter.filterTextImg} ${styleFilter.filterImgCategory}`} data-theme={darkMode ? "categoryBlogFilter" : "lightMode"}/> 
            <p className={styleFilter.filterText} data-theme={darkMode ? "darkNoBG" : "lightMode"}>دسته بندی </p>
        </div>
        <div className={styleFilter.filterCategory} data-theme={darkMode ? "dark" : "lightMode"}> دسته مورد نظر را انتخاب کنید </div>
    </div>
)
}
export{CategoryFilter}