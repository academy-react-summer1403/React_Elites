import React from 'react'
import style from './style.module.css'

const Teacher = (props) => {
  return (
    <div className={style.teacher}>{props.teacher} </div>
    
  )
}

export {Teacher}