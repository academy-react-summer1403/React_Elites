import React from 'react'
import style from './style.module.css'
import toast, { Toaster } from 'react-hot-toast'
import { likeNews } from '../../../../../../core/services/api/postNewsLike'
import { dislikeNews } from '../../../../../../core/services/api/postNewsDislike'

import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier'
import { useGlobalState } from '../../../../../../State/State'
const DisLike = ({ isClicked2, setIsClicked2, setIsClicked, id }) => {
  const [isLogin, setIsLogin] = useGlobalState('isLogin');


  const likeNewsCall = async (id) => {
    let res = await dislikeNews(id)
    if (res.success === true) {
      toast.success(res.message)
    }
    else if (isLogin === false) {
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
  }
  return (
    <>
      <Toaster />
      <div data-theme={identifier("darkDisLikeDetail","darkDisLikeDetail2")} className={isClicked2 ? style.disliked : style.dislike} onClick={() => {
        likeNewsCall(id)
        setIsClicked(false)
        setIsClicked2(true)
      }}></div>
    </>
  )
}

export { DisLike }