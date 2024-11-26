import React from 'react'
import style from './style.module.css'
import { postCourseLike } from '../../../../../../core/services/api/postCourseLike'
import { useGlobalState } from '../../../../../../State/State';
import toast, { Toaster } from 'react-hot-toast';

const Like = ({id}) => {
  const [isLiked, setIsLiked] = useGlobalState('courseLike');
  const [isDisLiked, setDiIsLiked] = useGlobalState('courseDisLike');

  const likeCourse = async () => {
    let res = await postCourseLike(id)
    if(res.success === true){
      toast.success("دوره با موفقیت لایک شد")
      setIsLiked("1")
    }
  }
  return (
    <>
      <Toaster />
      <div className={isLiked == "1" ? style.liked : style.like} onClick={() => likeCourse()}></div>
    </>
  )
}

export {Like}