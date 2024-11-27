import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { addToFav } from '../../../../../../core/services/api/postNewsFav'
import toast, { Toaster } from 'react-hot-toast'
import { useGlobalState } from '../../../../../../State/State'

const AddToFavourite = ({id}) => {
  const [isFavouriteBlog, setisCurrentUserFavorite] = useGlobalState('isFavouriteBlog');


  const addToFavCall = async (newsId) => {
    let res = await addToFav(newsId);
    if(res.success === true) {
      toast.success("بلاگ به لیست مورد علاقه اضافه شد")
      setisCurrentUserFavorite("1")
    }
  }
  return (
    <>
      <Toaster />
      {
        <div className={isFavouriteBlog == true  ? style.isFaved : style.AddToFav} onClick={() => {isFavouriteBlog == false && addToFavCall(id);
        }}>{isFavouriteBlog == true ? "به لیست مورد علاقه اضافه شد" : "اضافه به لیست موردعلاقه"}</div>
      }
    </>
  )
}

export {AddToFavourite}