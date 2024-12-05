import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../State/State';
import toast from 'react-hot-toast';
import { postCourseDisLike } from '../../../../../../core/services/api/postCourseDislike';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const DisLike = ({id}) => {
  const [isLiked, setIsLiked] = useGlobalState('courseLike');
  const [isDisLiked, setDiIsLiked] = useGlobalState('courseDisLike');
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  const dislikeCourse = async () => {
    let res = await postCourseDisLike(id)
    if(res.success === true){
      toast.success("دوره با موفقیت دیسلایک شد")
      setIsLiked("0")
    }
    if(isLogin === false){
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
  }

  return (
    <div data-theme={identifier("darkDisLikeDetail")} className={isDisLiked == "1" ? style.disLiked : style.dislike} onClick={() => isDisLiked === "0" && dislikeCourse()}></div>
  )
}

export {DisLike}