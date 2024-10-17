import {Field} from "formik";
import styleFilter from "./../filter.module.css";

const CategoryFilter = () => {

  return (
    <div className={styleFilter.filterDetail}>
        <div className="flex gap-1.5">
            <img className={styleFilter.filterTextImg} src="https://img.icons8.com/?size=100&id=nkCNPELCzMa7&format=png&color=000000" /> 
            <p className={styleFilter.filterText}>دسته بندی </p>
        </div>
        <Field className={styleFilter.filterInput} name="password" placeholder="دسته مورد نظر را انتخاب کنید "/>
    </div>
)
}
export{CategoryFilter}