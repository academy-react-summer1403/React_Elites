import React from 'react'
import style from './ViewsAndDate.module.css'

const Views = (props) => {
  return (
    <div className={style.views}>{props.views}</div>
  )
}

export {Views}