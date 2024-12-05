import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import { useGlobalState } from "../../../../State/State";
import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";

const DateFilter = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

  return (
    <div className={styleFilter.filterDetail}>
        <div className={styleFilter.Flex}>
            <div className={`${styleFilter.filterTextImg} ${styleFilter.filterImgDate}`} data-theme={identifier("dateBlogFilter")}/>
            <p className={styleFilter.filterText} data-theme={identifier("darkNoBG")}>{t("PublicationDate")}</p>
        </div>
        <Field type="date" className={styleFilter.filterInput} name="password" placeholder="" data-theme={identifier("dark")}/>
    </div>
)
}
export{DateFilter}