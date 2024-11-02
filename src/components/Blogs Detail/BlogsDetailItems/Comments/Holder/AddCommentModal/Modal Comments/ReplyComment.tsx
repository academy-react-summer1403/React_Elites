import React from 'react'
import style from './ReplyComments.module.css'

const ReplyComment = ({title, describe, autor, dissLikeCount, likeCount, inserDate}) => {
    return (
        <div className={style.mainHolder}>
            <div className={style.isReply}></div>
            <div className={style.holder}>
            <div className={style.header}>
                <div className={style.holderUser}>
                    <div className={style.holderUsername}>
                        <div className={style.userName}> {autor} </div>
                        <div className={style.insertDate}> {inserDate} </div>
                    </div>
                    <img className={style.userAvatar} />
                </div>
            </div>
            <div className={style.content}>
                <div className={style.commentTitle}> {title} </div>
                <div className={style.commentDesc}> {describe} </div>
            </div>
            <div className={style.footer}>
                <div  className={style.likeIcon}></div>
                <div  className={style.likeCount}> {likeCount} </div>
                <div  className={style.dislikeIcon}></div>
                <div  className={style.dislikeCount}> {dissLikeCount} </div>
            </div>
        </div>
        </div>
    )
}

export {ReplyComment}