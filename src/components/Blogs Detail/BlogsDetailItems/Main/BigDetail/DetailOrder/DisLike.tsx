import React from 'react'
import style from './style.module.css'
import toast, { Toaster } from 'react-hot-toast'
import { likeNews } from '../../../../../../core/services/api/postNewsLike'
import { dislikeNews } from '../../../../../../core/services/api/postNewsDislike'

const DisLike = ({currentUserIsDissLike, id}) => {
  
  const likeNewsCall = async (id) => {
    let res = await dislikeNews(id)
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
      <div className={currentUserIsDissLike ? style.disliked : style.dislike} onClick={() => {
      likeNewsCall(id)
    }}></div>
    </>
  )
}

export {DisLike}