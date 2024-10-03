import React from 'react'
import style from '../style.module.css'

const Description = (props) => {
  return (
    <div className={style.desc}>{props.desc}</div>
  )
}

export {Description}