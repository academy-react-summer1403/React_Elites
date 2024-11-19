import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import { useTranslation } from 'react-i18next';
import { useGlobalState } from "../../../../State/State";

const DateFilter = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleFilter.filterDetail}>
        <div className="flex gap-1.5">
            <div className={`${styleFilter.filterTextImg} ${styleFilter.filterImgDate}`} data-theme={darkMode ? "dateBlogFilter" : "lightMode"}/>
            <p className={styleFilter.filterText} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("PublicationDate")}</p>
        </div>
        <Field type="date" className={styleFilter.filterInput} name="password" placeholder="" data-theme={darkMode ? "dark" : "lightMode"}/>
    </div>
)
}
export{DateFilter}