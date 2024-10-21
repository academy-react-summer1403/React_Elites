import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import { useGlobalState } from "../../../../State/State";

const CategoryFilter = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleFilter.filterDetail}>
        <div className="flex gap-1.5">
            <img className={styleFilter.filterTextImg} src="https://img.icons8.com/?size=100&id=nkCNPELCzMa7&format=png&color=000000" /> 
            <p className={styleFilter.filterText} data-theme={darkMode ? "darkNoBG" : "lightMode"}>دسته بندی </p>
        </div>
        <div className={styleFilter.filterCategory} data-theme={darkMode ? "dark" : "lightMode"}> دسته مورد نظر را انتخاب کنید </div>
    </div>
)
}
export{CategoryFilter}