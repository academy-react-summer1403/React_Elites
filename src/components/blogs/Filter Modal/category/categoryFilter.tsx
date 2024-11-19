import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import { useTranslation } from 'react-i18next';

const CategoryFilter = () => {
    const { t } = useTranslation();
  return (
    <div className={styleFilter.filterDetail}>
        <div className="flex gap-1.5">
            <img className={styleFilter.filterTextImg} src="https://img.icons8.com/?size=100&id=nkCNPELCzMa7&format=png&color=000000" /> 
            <p className={styleFilter.filterText}>{t("category")} </p>
        </div>
        <div className={styleFilter.filterCategory} > {t("CategoryBlogs")} </div>
    </div>
)
}
export{CategoryFilter}