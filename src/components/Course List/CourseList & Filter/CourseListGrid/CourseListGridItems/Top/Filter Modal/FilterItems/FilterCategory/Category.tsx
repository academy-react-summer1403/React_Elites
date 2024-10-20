import React from 'react'
import style from './Category.module.css'

const Category = () => {
  return (
    <>
        <div className={style.titleCat} > دسته بندی </div>
        <div className={style.cat}>دسته مورد نظر را انتخاب کنید</div>
    </>
  )
}

export {Category}