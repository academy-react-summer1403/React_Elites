import React from 'react'
import style from './GridItemsTitle.module.css'
import styleDark from './../../../../../../../Style/DarkMode.module.css'

const GridItemsTitle = () => {
  return (
    <div className={`${style.title} ${styleDark.title}`}>راهنمایی و ایجاد انگیزه</div>
  )
}

export {GridItemsTitle}