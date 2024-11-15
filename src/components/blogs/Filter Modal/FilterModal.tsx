import styleFilter from "./filter.module.css";
import { CategoryFilter } from "./category/categoryFilter.tsx";
import { DateFilter } from "./date/dateFilter.tsx";
import { SearchFilter } from "./search/searchFilter.tsx";
import { useTranslation } from 'react-i18next';

const FilterModal = ({setFilterModal}) => {
  const { t } = useTranslation();

  return (
    <div className={styleFilter.filter}>
      <div className={styleFilter.container}>
        <h1 className={styleFilter.filterTitle}> {t("filter")}</h1>
          <div className={styleFilter.closeBtn} onClick={() => {
            setFilterModal(false)
          }}> {t("close")} </div>
      </div>
        <SearchFilter />
        <CategoryFilter />
        <DateFilter />
    </div>
  )
}



export { FilterModal }