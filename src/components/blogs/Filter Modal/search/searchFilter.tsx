import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import search from '../../../../assets/Images/icons8-search-30.png'
import { useTranslation } from 'react-i18next';

const SearchFilter = () => {
  const { t } = useTranslation();
  return (
    <div className={styleFilter.filterDetail}>
      <div className="flex gap-1.5">
        <img className={styleFilter.filterTextImg} src={search} /> 
        <p className={styleFilter.filterText}>{t("search")}</p>
      </div>
      <Field className={styleFilter.filterInput} name="password" placeholder="بلاگ مورد نظر را جست‌جو کنید..." />
      <div className={styleFilter.searchBox}></div>
    </div>
)
}
export{SearchFilter}