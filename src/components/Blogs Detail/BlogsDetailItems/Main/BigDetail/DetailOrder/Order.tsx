import React from 'react'
import style from './style.module.css'
import { ReserveCourse } from './ReserveCourse'
import { AddToFavourite } from './AddToFavourite'
import { Like } from './Like'
import { DisLike } from './DisLike'

const Order = ({currentUserIsLike, currentUserIsDissLike, id}) => {
  return (
    <div className={style.holder}>
        <DisLike id={id} currentUserIsDissLike={currentUserIsDissLike} />
        <Like currentUserIsLike={currentUserIsLike} id={id} />
        <AddToFavourite id={id} />
        <ReserveCourse />
    </div>
  )
}

export {Order}