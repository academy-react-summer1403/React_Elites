import React from 'react'
import style from './../../ItemsHolder.module.css'

const Level = (props) => {
  return (
    <div className={style.level}>{props.level}</div>
  )
}

export {Level}