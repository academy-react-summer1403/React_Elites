import styleFilter from "./filter.module.css";
import { CategoryFilter } from "./category/categoryFilter.tsx";
import { DateFilter } from "./date/dateFilter.tsx";
import { SearchFilter } from "./search/searchFilter.tsx";
import { useGlobalState } from "../../../State/State.tsx";

const Filter = ({setCategoryId, setApplyFilter, categoryId, applyFilter, setSearchValue}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleFilter.filter} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <h1 className={styleFilter.filterTitle} data-theme={darkMode ? "darkNoBG" : "lightMode"}> فیلتر</h1>
        <SearchFilter setSearchValue={setSearchValue} />
        <CategoryFilter setCategoryId={setCategoryId} categoryId={categoryId} />
        <DateFilter />
        <span className={applyFilter ? styleFilter.applyFilter2 : styleFilter.applyFilter} onClick={() => {
          setApplyFilter(true);
        }}> اعمال فیلتر </span>
        <span className={styleFilter.deleteFilter} onClick={() => {
          setApplyFilter(false);
          setCategoryId("")
        }}> حذف فیلتر </span>
    </div>
  )
}



export { Filter }