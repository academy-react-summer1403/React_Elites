import React from 'react'
import styleBlogList from '../../../../Style/blogList.module.css'
import { SortModal } from "../../Sort Modal/SortModal.tsx";

const SortResBlogList = ({ setSortModal, sortModal }) => {
  return (
    <>
      <div className={styleBlogList.sortResponsive} onClick={() => {
        if (sortModal == false) {
          setSortModal(true)
        }
        else if (sortModal == true) {
          setSortModal(false)
        }
      }}>ترتیب</div>
      {sortModal && <SortModal setSortModal={setSortModal} />}
    </>
  )
}

export { SortResBlogList }