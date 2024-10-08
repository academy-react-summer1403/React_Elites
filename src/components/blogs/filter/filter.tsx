import styleFilter from "./filter.module.css";
import { CategoryFilter } from "./category/categoryFilter.tsx";
import { DateFilter } from "./date/dateFilter.tsx";
import { SearchFilter } from "./search/searchFilter.tsx";

const Filter = () => {

  return (
    <div className={styleFilter.filter}>
        <h1 className={styleFilter.filterTitle}> فیلتر</h1>
        <SearchFilter />
        <CategoryFilter />
        <DateFilter />
    </div>
  )
}

export { Filter }