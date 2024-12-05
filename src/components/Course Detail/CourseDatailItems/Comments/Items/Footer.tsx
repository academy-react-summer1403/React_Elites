import React from 'react'
import style from './style.module.css'
import Bahr from '../../../../../assets/Images/Bahr.jpg'
import { useGlobalState } from '../../../../../State/State';
import { dateConvertor } from '../../../../../core/services/Functions/DateMiladi';
import { postCourseCommentLike } from '../../../../../core/services/api/postCoureCommentLike';
import toast, { Toaster } from 'react-hot-toast';
import { postCourseCommentDisLike } from '../../../../../core/services/api/postCourseCommentDisLike';

const Footer = ({pictureAddress, currentUserEmotion, id, author, disslikeCount, likeCount, insertDate, commentId}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.footer}>
      <Toaster />
        <div className={style.likeAndDislikes}>
            <div className={style.count} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{likeCount}</div>
            <div data-theme={darkMode ? "darkLikeDetail" : "lightMode"} className={currentUserEmotion == "LIKED" ? style.liked : style.like} onClick={async () => {
              let res = await postCourseCommentLike(commentId)
              if(res.success === true){
                toast.success("کامنت لایک شد")
              }
            }}></div>
            <div className={style.count} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{disslikeCount}</div>
            <div data-theme={darkMode ? "darkDisLikeDetail" : "lightMode"} className={currentUserEmotion == "DISSLIKED" ? style.disliked : style.dislike} onClick={async () => {
              let res = await postCourseCommentDisLike(commentId)
              console.log(res)
              if(res.success === true){
                toast.success("کامنت دیس لایک شد")
              }
            }}></div>
        </div>
        <div className={style.user}>
            <div className={style.username} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{author}</div>
            <img className={style.profile} src={pictureAddress} />
            <div className={style.date} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{dateConvertor(insertDate)}</div>
        </div>
    </div>
  )
}

export {Footer}