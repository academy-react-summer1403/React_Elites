import React from 'react'
import style from './Publisher.module.css'

const Publisher = (props) => {
  return (
    <div className={style.publisher}>{props.pub}</div>
  )
}

export {Publisher}