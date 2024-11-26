import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../State/State';
import toast from 'react-hot-toast';
import { postCourseDisLike } from '../../../../../../core/services/api/postCourseDislike';

const DisLike = ({id}) => {
  const [isLiked, setIsLiked] = useGlobalState('courseLike');
  const [isDisLiked, setDiIsLiked] = useGlobalState('courseDisLike');

  const dislikeCourse = async () => {
    let res = await postCourseDisLike(id)
    if(res.success === true){
      toast.success("دوره با موفقیت دیسلایک شد")
      setIsLiked("0")
    }
  }

  return (
    <div className={isDisLiked == "1" ? style.disLiked : style.dislike} onClick={() => isDisLiked === "0" && dislikeCourse()}></div>
  )
}

export {DisLike}