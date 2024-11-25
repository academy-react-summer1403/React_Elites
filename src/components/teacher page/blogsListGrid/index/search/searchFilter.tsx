import {Field} from "formik";
import styleFilter from "../../../../blogs/filter/filter.module.css";
import style from "../Title&courseHolder.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from 'react-i18next';

const SearchFilter = ({setSearchValue}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (
    <div className={style.filterDetail}>
      <input className={styleFilter.filterInput} name="password" placeholder={t("TeacherSearch")} data-theme={darkMode ? "dark" : "lightMode"} onChange={(e) => {
          setSearchValue(e.target.value)
        }}/>
      <div className={style.searchBox}></div>
    </div>
)
}
export{SearchFilter}