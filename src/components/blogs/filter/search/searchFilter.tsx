import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import { useGlobalState } from "../../../../State/State";
import { useTranslation } from 'react-i18next';

const SearchFilter = ({setSearchValue}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (
    <div className={styleFilter.filterDetail}>
      <div className="flex gap-1.5">
      <div className={`${styleFilter.filterTextImg} ${styleFilter.filterImgSearch}`} data-theme={darkMode ? "search" : "lightMode"}/>
        <p className={styleFilter.filterText} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("search")}</p>
      </div>
      <input className={styleFilter.filterInput} name="password" placeholder={t("searchBlogs")} data-theme={darkMode ? "dark" : "lightMode"} onChange={(e) => {
          setSearchValue(e.target.value)
        }}/>
      <div className={styleFilter.searchBox}></div>
    </div>
)
}
export{SearchFilter}