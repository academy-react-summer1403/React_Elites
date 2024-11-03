import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { ReserveCourse } from './ReserveCourse'
import { AddToFavourite } from './AddToFavourite'
import { Like } from './Like'
import { DisLike } from './DisLike'

const Order = ({currentUserIsLike, currentUserIsDissLike, id, isCurrentUserFavorite}) => {
  
  const [isClicked, setIsClicked] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isFavourite, setIsFavourite] = useState(false)

  useEffect(() => {
    setIsClicked(currentUserIsLike)
    setIsClicked2(currentUserIsDissLike)
    setIsFavourite(isCurrentUserFavorite)
    console.log(isCurrentUserFavorite)
  }, [])
  

  return (
    <div className={style.holder}>
        <DisLike id={id} isClicked2={isClicked2} setIsClicked2={setIsClicked2} setIsClicked={setIsClicked} />
        <Like isClicked={isClicked} setIsClicked={setIsClicked} setIsClicked2={setIsClicked2} id={id} />
        <AddToFavourite id={id} isFavourite={isFavourite} setIsFavourite={setIsFavourite} />
        <ReserveCourse />
    </div>
  )
}

export {Order}