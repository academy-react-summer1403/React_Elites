import React from 'react'
import style from './style.module.css'
import { likeNews } from '../../../../../../core/services/api/postNewsLike'
import toast, { Toaster } from 'react-hot-toast'
import { useGlobalState } from '../../../../../../State/State'

const Like = ({isClicked, setIsClicked2, setIsClicked, id}) => {
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  const likeNewsCall = async (id) => {
    let res = await likeNews(id)
    if(res.success === true) {
      toast.success(res.message)
    }
    else if(isLogin === false){
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
  }
  return (
    <>
    <Toaster />
    <div data-theme={darkMode ? "darkLikeDetail" : "lightMode"} className={isClicked ? style.liked : style.like} onClick={() => {
      likeNewsCall(id)
      setIsClicked2(false)
      setIsClicked(true)
    }}></div>
    </>
  )
}

export {Like}