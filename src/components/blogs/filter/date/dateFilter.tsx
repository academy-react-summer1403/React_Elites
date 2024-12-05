import {Field} from "formik";
import styleFilter from "./../filter.module.css";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";

const DateFilter = () => {
  
    const { t } = useTranslation();

  return (
    <div className={styleFilter.filterDetail}>
        <div className={styleFilter.Flex}>
            <div className={`${styleFilter.filterTextImg} ${styleFilter.filterImgDate}`} data-theme={identifier("dateBlogFilter","dateBlogFilter2")}/>
            <p className={styleFilter.filterText} data-theme={identifier("darkNoBG","dark2NoBG")}>{t("PublicationDate")}</p>
        </div>
        <Field type="date" className={styleFilter.filterInput} name="password" placeholder="" data-theme={identifier("dark","dark2")}/>
    </div>
)
}
export{DateFilter}