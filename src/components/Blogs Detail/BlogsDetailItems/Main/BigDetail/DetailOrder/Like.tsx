import React from 'react'
import style from './style.module.css'
import { likeNews } from '../../../../../../core/services/api/postNewsLike'
import toast, { Toaster } from 'react-hot-toast'

const Like = ({isClicked, setIsClicked2, setIsClicked, id}) => {

  const likeNewsCall = async (id) => {
    let res = await likeNews(id)
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
    <div className={isClicked ? style.liked : style.like} onClick={() => {
      likeNewsCall(id)
      setIsClicked2(false)
      setIsClicked(true)
    }}></div>
    </>
  )
}

export {Like}