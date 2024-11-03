import React from 'react'
import style from './style.module.css'
import { addToFav } from '../../../../../../core/services/api/postNewsFav'
import toast, { Toaster } from 'react-hot-toast'

const AddToFavourite = ({id}) => {

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
      <div className={style.AddToFav} onClick={() => {
        addToFavCall(id);
      }}>اضافه به لیست موردعلاقه</div>
    </>
  )
}

export {AddToFavourite}