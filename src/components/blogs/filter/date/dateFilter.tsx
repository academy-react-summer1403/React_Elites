import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import { useGlobalState } from "../../../../State/State";
import { useTranslation } from 'react-i18next';

const DateFilter = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

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