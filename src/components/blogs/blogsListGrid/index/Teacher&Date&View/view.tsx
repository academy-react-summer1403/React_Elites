import React from 'react'
import style from './style.module.css'

const View = (props) => {
  return (
    <div className={style.view}>{props.view} </div>
  )
}

export {View}