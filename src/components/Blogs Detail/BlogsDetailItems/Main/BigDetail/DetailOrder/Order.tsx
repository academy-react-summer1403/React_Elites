import React from 'react'
import style from './style.module.css'
import { ReserveCourse } from './ReserveCourse'
import { AddToFavourite } from './AddToFavourite'
import { Like } from './Like'
import { DisLike } from './DisLike'

const Order = () => {
  return (
    <div className={style.holder}>
        <DisLike />
        <Like />
        <AddToFavourite />
        <ReserveCourse />
    </div>
  )
}

export {Order}