import styleFilter from "./filter.module.css";
import { CategoryFilter } from "./category/categoryFilter.tsx";
import { DateFilter } from "./date/dateFilter.tsx";
import { SearchFilter } from "./search/searchFilter.tsx";
import { useGlobalState } from "../../../State/State.tsx";
import { useTranslation } from 'react-i18next';

const Filter = ({setCategoryId, setApplyFilter, categoryId, applyFilter, setSearchValue, categoryList}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={styleFilter.filter} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <h1 className={styleFilter.filterTitle} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("filter")}</h1>
        <SearchFilter setSearchValue={setSearchValue} />
        <CategoryFilter categoryList={categoryList} setCategoryId={setCategoryId} categoryId={categoryId} />
        <DateFilter />
        <span className={applyFilter ? styleFilter.applyFilter2 : styleFilter.applyFilter} onClick={() => {
          setApplyFilter(true);
        }}> {t("applyFilter")} </span>
        <span className={styleFilter.deleteFilter} onClick={() => {
          setApplyFilter(false);
          setCategoryId("")
        }}> {t("deleteFilter")} </span>
    </div>
  )
}



export { Filter }