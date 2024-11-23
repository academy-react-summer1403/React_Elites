import React, { useEffect, useState } from 'react'
import style from './ModalComments.module.css'
import { likeComment } from '../../../../../../../core/services/api/postCommentBlogLike'
import toast, { Toaster } from 'react-hot-toast'

const MainComment = ({title, pictureAddress, describe, autor, dissLikeCount, likeCount, inserDate, currentUserIsDissLike, currentUserIsLike, id}) => {

    const [isClicked, setIsClicked] = useState(false)
    const [isClicked2, setIsClicked2] = useState(false)
    
    useEffect(() => {
        setIsClicked(currentUserIsLike)
        setIsClicked2(currentUserIsDissLike)
    }, [])
    

        const likeSystem = async (id, type) => {
            let res = await likeComment(id, type)
            if(res.success === true){
            toast.success('عملیات با موفقیت انجام شد')
            }
            else{
            return
            }
        }

    return (
    <div className={style.holder}>
        <Toaster />
        <div className={style.header}>
            <div className={style.holderUser}>
                <div className={style.holderUsername}>
                    <div className={style.userName}> {autor} </div>
                    <div className={style.insertDate}> {inserDate} </div>
                </div>
                <img className={style.userAvatar} src={pictureAddress} />
            </div>
        </div>
        <div className={style.content}>
            <div className={style.commentTitle}> {title} </div>
            <div className={style.commentDesc}> {describe} </div>
        </div>
        <div className={style.footer}>
            <div  className={isClicked === true ? style.like : style.likeIcon} onClick={() => {
                likeSystem(id, true)
                setIsClicked(true)
                setIsClicked2(false)
            }}></div>
            <div  className={style.likeCount}> {likeCount} </div>
            <div  className={isClicked2 === true ? style.dislike : style.dislikeIcon} onClick={() => {
                likeSystem(id, false)
                setIsClicked2(true)
                setIsClicked(false)
            }}></div>
            <div  className={style.dislikeCount}> {dissLikeCount} </div>
            <div  className={style.reply}> جواب دادن </div>
        </div>
    </div>
  )
}

export {MainComment}