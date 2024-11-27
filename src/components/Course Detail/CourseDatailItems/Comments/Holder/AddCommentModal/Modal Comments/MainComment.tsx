import React, { useEffect, useState } from 'react'
import style from './ModalComments.module.css'
import { likeComment } from '../../../../../../../core/services/api/postCommentBlogLike'
import toast, { Toaster } from 'react-hot-toast'
import { postCourseCommentLike } from '../../../../../../../core/services/api/postCoureCommentLike'
import { postCourseCommentDisLike } from '../../../../../../../core/services/api/postCourseCommentDisLike'
import { Field, Formik, Form } from 'formik'
import { postCourseReplyComment } from '../../../../../../../core/services/api/postCourseReplyComment'
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi'
import { useGlobalState } from '../../../../../../../State/State'

const MainComment = ({title, pictureAddress, describe, author, dissLikeCount, likeCount, insertDate, id}) => {
    const [replyComment, setreplyComment] = useState(false)
    const [isReplying, setIsReplying] = useGlobalState('isReplying');
    const [commentId, setCommentId] = useGlobalState('courseCommentId');

    return (
    <>
    <div className={style.holder}>
        <div className={style.header}>
            <div className={style.holderUser}>
                <div className={style.holderUsername}>
                    <div className={style.userName}> {author} </div>
                    <div className={style.insertDate}> {dateConvertor(insertDate)} </div>
                </div>
                <img className={style.userAvatar} src={pictureAddress} />
            </div>
        </div>
        <div className={style.content}>
            <div className={style.commentTitle}> {title} </div>
            <div className={style.commentDesc}> {describe} </div>
        </div>
        <div className={style.footer}>
            <div  className={style.likeIcon} onClick={async () => {
            let res = await postCourseCommentLike(id)
            if(res.success === true){
            toast.success('کامنت لایک شد')
            }
            }}></div>
            <div  className={style.likeCount}> {likeCount} </div>
            <div  className={style.dislikeIcon} onClick={async () => {
            let res = await postCourseCommentDisLike(id)
            if(res.success === true){
            toast.success('کامنت دیس لایک شد')
            }
            }}></div>
            <div  className={style.dislikeCount}> {dissLikeCount} </div>
            <div  className={style.reply} onClick={() => {
                setIsReplying(!isReplying)
                setCommentId(id)
                }}> جواب دادن </div>
        </div>
    </div>
    </>
  )
}

export {MainComment}