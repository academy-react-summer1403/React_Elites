import React from 'react'
import styleBlogList from '../../../../Style/blogList.module.css'
import { FilterModal } from "../../Filter Modal/FilterModal.tsx";

const FilterResBlogList = ({ setFilterModal, filterModal }) => {
  return (
    <>
      <div className={styleBlogList.filterResponsive} onClick={() => {
        if (filterModal == false) {
          setFilterModal(true)
        }
        else if (filterModal == true) {
          setFilterModal(false)
        }
      }}>فیلتر</div>
      {filterModal && <FilterModal setFilterModal={setFilterModal} />}
    </>
  )
}

export { FilterResBlogList }