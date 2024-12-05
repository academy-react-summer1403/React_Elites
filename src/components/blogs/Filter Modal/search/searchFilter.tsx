import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import { useGlobalState } from "../../../../State/State";
import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";

const SearchFilter = ({setSearchValue}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (
    <div className={styleFilter.filterDetail}>
      <div className={styleFilter.Flex}>
      <div className={`${styleFilter.filterTextImg} ${styleFilter.filterImgSearch}`} data-theme={identifier("search")}/>
        <p className={styleFilter.filterText} data-theme={identifier("darkNoBG")}>{t("search")}</p>
      </div>
      <input className={styleFilter.filterInput} name="password" placeholder={t("searchBlogs")} data-theme={identifier("dark")} onChange={(e) => {
          setSearchValue(e.target.value)
        }}/>
      <div className={styleFilter.searchBox}></div>
    </div>
)
}
export{SearchFilter}