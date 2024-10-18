import styleFilter from "./filter.module.css";
import { CategoryFilter } from "./category/categoryFilter.tsx";
import { DateFilter } from "./date/dateFilter.tsx";
import { SearchFilter } from "./search/searchFilter.tsx";

const FilterModal = ({setFilterModal}) => {

  return (
    <div className={styleFilter.filter}>
      <div className={styleFilter.container}>
        <h1 className={styleFilter.filterTitle}> فیلتر</h1>
          <div className={styleFilter.closeBtn} onClick={() => {
            setFilterModal(false)
          }}> بستن </div>
      </div>
        <SearchFilter />
        <CategoryFilter />
        <DateFilter />
    </div>
  )
}



export { FilterModal }