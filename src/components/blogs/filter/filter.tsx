import styleFilter from "./filter.module.css";
import { CategoryFilter } from "./category/categoryFilter.tsx";
import { DateFilter } from "./date/dateFilter.tsx";
import { SearchFilter } from "./search/searchFilter.tsx";
import { useGlobalState } from "../../../State/State.tsx";

const Filter = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleFilter.filter} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <h1 className={styleFilter.filterTitle} data-theme={darkMode ? "darkNoBG" : "lightMode"}> فیلتر</h1>
        <SearchFilter />
        <CategoryFilter />
        <DateFilter />
    </div>
  )
}



export { Filter }