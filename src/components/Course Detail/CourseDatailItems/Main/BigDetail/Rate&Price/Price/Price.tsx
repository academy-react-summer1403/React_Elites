import React from 'react'
import style from './Price.module.css'

const Price = () => {
  return (
    <div className={style.price}>

        <div className={style.toman}>تومان</div>
        <div className={style.number}>2،500،000</div>

    </div>
  )
}

export {Price}