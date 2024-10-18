import {Field} from "formik";
import styleFilter from "./../filter.module.css";

const DateFilter = () => {

  return (
    <div className={styleFilter.filterDetail}>
        <div className="flex gap-1.5">
            <img className={styleFilter.filterTextImg} src="https://img.icons8.com/?size=100&id=BCKAW92AuElD&format=png&color=000000" /> 
            <p className={styleFilter.filterText}>تاریخ انتشار</p>
        </div>
        <Field className={styleFilter.filterInput} name="password" placeholder="?" />
    </div>
)
}
export{DateFilter}