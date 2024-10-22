import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import { useGlobalState } from "../../../../State/State";

const DateFilter = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={styleFilter.filterDetail}>
        <div className="flex gap-1.5">
            <img className={styleFilter.filterTextImg} src="https://img.icons8.com/?size=100&id=BCKAW92AuElD&format=png&color=000000" /> 
            <p className={styleFilter.filterText} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ انتشار</p>
        </div>
        <Field type="date" className={styleFilter.filterInput} name="password" placeholder="" data-theme={darkMode ? "dark" : "lightMode"}/>
    </div>
)
}
export{DateFilter}