import styleFilter from "./filter.module.css";
import { CategoryFilter } from "./category/categoryFilter.tsx";
import { DateFilter } from "./date/dateFilter.tsx";
import { SearchFilter } from "./search/searchFilter.tsx";
import { useGlobalState } from "../../../State/State.tsx";
import { useTranslation } from 'react-i18next';
import { identifier } from "../../../core/services/Functions/ThemeIdentifier.ts";

const Filter = ({setFilterModal}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={styleFilter.filter} data-theme={identifier("darkSmall")}>
        <h1 className={styleFilter.filterTitle} data-theme={identifier("darkNoBG")}> {t("filter")}</h1>
        <SearchFilter  />
        <CategoryFilter />
        <span className={styleFilter.applyFilter} onClick={() => {
        }}> {t("applyFilter")} </span>
        <span className={styleFilter.deleteFilter} onClick={() => {
        }}> {t("deleteFilter")} </span>
    </div>
  )
}



export { Filter }