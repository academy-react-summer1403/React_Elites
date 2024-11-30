import React from 'react'
import style from './style.module.css'
import { postCourseLike } from '../../../../../../core/services/api/postCourseLike'
import { useGlobalState } from '../../../../../../State/State';
import toast, { Toaster } from 'react-hot-toast';
import { deleteCourseLike } from '../../../../../../core/services/api/delete-course-like';

const Like = ({id, userLikeId}) => {
  const [isLiked, setIsLiked] = useGlobalState('courseLike');
  const [isDisLiked, setDiIsLiked] = useGlobalState('courseDisLike');
  const [isLogin, setIsLogin] = useGlobalState('isLogin');

  const likeCourse = async () => {
    let res = await postCourseLike(id)
    if(res.success === true){
      toast.success("دوره با موفقیت لایک شد")
      setIsLiked("1")
    }
    else if(isLogin === false){
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
  }
  const unLikeCourse = async () => {
    console.log(userLikeId)

    const likeId = new FormData();
    likeId.append('CourseLikeId', `${userLikeId}`)

    let res2 = await deleteCourseLike(likeId)
    if(res2.success === true){
      toast.success("دوره با موفقیت لایک شد")
      setIsLiked("0")
    }
    else if(isLogin === false){
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
  }
  return (
    <>
      <Toaster />
      <div className={isLiked == "1" ? style.liked : style.like} onClick={() => {
        if(isLiked == "0"){
          likeCourse()
        }
        else if(isLiked == "1"){
          unLikeCourse()
        }
        }}></div>
    </>
  )
}

export {Like}