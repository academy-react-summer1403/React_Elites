import React from 'react'
import style from './GridItemsTitle.module.css'
import styleDark from './../../../../../../../Style/DarkMode.module.css'

const GridItemsTitle = () => {
  return (
    <div className={`${style.title} ${styleDark.title}`}>آماده سازی برای بازار کار</div>
  )
}

export {GridItemsTitle}