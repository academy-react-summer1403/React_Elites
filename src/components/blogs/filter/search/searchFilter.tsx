import {Field} from "formik";
import styleFilter from "./../filter.module.css";
import search from '../../../../assets/Images/icons8-search-30.png'
import { useGlobalState } from "../../../../State/State";

const SearchFilter = ({setSearchValue}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={styleFilter.filterDetail}>
      <div className="flex gap-1.5">
        <img className={styleFilter.filterTextImg} src={search} /> 
        <p className={styleFilter.filterText} data-theme={darkMode ? "darkNoBG" : "lightMode"}>جست‌جو</p>
      </div>
      <input className={styleFilter.filterInput} name="password" placeholder="بلاگ مورد نظر را جست‌جو کنید..." data-theme={darkMode ? "dark" : "lightMode"} onChange={(e) => {
          setSearchValue(e.target.value)
        }}/>
      <div className={styleFilter.searchBox}></div>
    </div>
)
}
export{SearchFilter}