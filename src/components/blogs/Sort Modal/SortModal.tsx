import React from 'react'
import style from '../../../Style/blogList.module.css'

const SortModal = ({setSortModal}) => {
  return (
    <div className={style.sortModal}>
        <div className={style.holderTitle}>
            <h1 className={style.sortingTitleModal}>ترتیب</h1>
            <div className={style.closeBtn} onClick={() => {
                setSortModal(false)
            }}> بستن </div>
        </div>
        <input type="radio" checked name="sort" id="New" className={style.inputSortModal} />
        <label htmlFor="New" className={style.sortButtonLabelModal} > جدیدترین </label>

        <input type="radio" name="sort" id="Popular" className={style.inputSortModal} />
        <label htmlFor="Popular" className={style.sortButtonLabelModal} > محبوبترین </label>
    </div>
  )
}

export {SortModal}