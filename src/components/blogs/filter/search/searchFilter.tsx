import {Field} from "formik";
import styleFilter from "./../filter.module.css";

const SearchFilter = () => {

  return (
    <div className={styleFilter.filterDetail}>
      <div className="flex gap-1.5">
        <img className={styleFilter.filterTextImg} src="https://img.icons8.com/?size=100&id=nkCNPELCzMa7&format=png&color=000000" /> 
        <p className={styleFilter.filterText}>جست‌جو</p>
      </div>
      <Field className={styleFilter.filterInput} name="password" placeholder="بلاگ مورد نظر را جست‌جو کنید..." />
    </div>
)
}
export{SearchFilter}