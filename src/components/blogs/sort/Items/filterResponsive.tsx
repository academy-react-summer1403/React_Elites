import React from 'react'
import styleBlogList from '../../../../Style/blogList.module.css'
import { FilterModal } from "../../Filter Modal/FilterModal.tsx";
import { useTranslation } from 'react-i18next';

const FilterResBlogList = ({ setFilterModal, filterModal }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styleBlogList.filterResponsive} onClick={() => {
        if (filterModal == false) {
          setFilterModal(true)
        }
        else if (filterModal == true) {
          setFilterModal(false)
        }
      }}>{t("filter")}</div>
      {filterModal && <FilterModal setFilterModal={setFilterModal} />}
    </>
  )
}

export { FilterResBlogList }