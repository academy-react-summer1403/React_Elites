import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { addToFav } from '../../../../../../core/services/api/postNewsFav'
import toast, { Toaster } from 'react-hot-toast'

const AddToFavourite = ({id, isFavourite, setIsFavourite}) => {
  

  const addToFavCall = async (newsId) => {
    let res = await addToFav(newsId);
    if(res.success === true) {
      toast.success(res.message)
    }
    else{
      toast.error('خطا در انجام عملیات')
    }
  }
  return (
    <>
      <Toaster />
      {
        isFavourite == false &&
        <div className={style.AddToFav} onClick={() => {
          addToFavCall(id);
          setIsFavourite(true)
        }}>اضافه به لیست موردعلاقه</div>
      }
      {
        isFavourite == true &&
        <div className={style.isFaved} onClick={() => {
        }}> به لیست مورد علاقه اضافه شد </div>
      }
    </>
  )
}

export {AddToFavourite}