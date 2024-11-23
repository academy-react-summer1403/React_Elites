import React from 'react'
import style from './style.module.css'
import { ReserveCourse } from './ReserveCourse'
import { AddToFavourite } from './AddToFavourite'
import { Like } from './Like'
import { DisLike } from './DisLike'

const Order = ({id}) => {
  return (
    <div className={style.holder}>
        <DisLike />
        <Like />
        <AddToFavourite />
        <ReserveCourse id={id} />
    </div>
  )
}

export {Order}