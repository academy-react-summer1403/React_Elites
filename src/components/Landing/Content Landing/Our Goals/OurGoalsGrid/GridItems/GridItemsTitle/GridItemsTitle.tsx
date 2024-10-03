import React from 'react'
import style from './GridItemsTitle.module.css'

const GridItemsTitle = (props) => {
  return (
    <div className={style.title}>{props.title}</div>
  )
}

export {GridItemsTitle}