import React from 'react'
import style from './Decription.module.css'

const Description = (props) => {
  return (
    <div className={style.description}>{props.description}</div>
  )
}

export {Description}