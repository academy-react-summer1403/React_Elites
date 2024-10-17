import React from 'react'
import style from './style.module.css'

const Price = (props) => {
  return (
    <div className={style.price}>{props.price}</div>
  )
}

export {Price}