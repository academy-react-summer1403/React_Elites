import React, { useEffect, useState } from 'react'
import style from './ModalComments.module.css'
import { MainComment } from './MainComment'
import { getReplyComment } from '../../../../../../../core/services/api/getReplyCommentsBlog'
import { ReplyComment } from './ReplyComment'
import toast from 'react-hot-toast'
import { likeComment } from '../../../../../../../core/services/api/postCommentBlogLike'

const ModalComments = ({title, describe, autor, dissLikeCount, pictureAddress, likeCount, inserDate, id, currentUserIsLike, currentUserIsDissLike}) => {

    const [repliesObj, setRepliesObj] = useState([])

    const getReplyCall = async (id) => {
      let res = await getReplyComment(id)
      setRepliesObj(res)
    }

    useEffect(() => {
        getReplyCall(id)
    }, [])

    return (
        <>
        <div className={style.holderReplyAndComment}>
            <MainComment 
            title={title}
            describe={describe}
            autor={autor}
            dissLikeCount={dissLikeCount}
            likeCount={likeCount}
            inserDate={inserDate}
            currentUserIsLike={currentUserIsLike}
            currentUserIsDissLike={currentUserIsDissLike}
            id={id}
            pictureAddress={pictureAddress}
            />
            {repliesObj.map((item, index) => {
                return(
                    <ReplyComment
                        key={index}
                        title={item.title}
                        describe={item.describe}
                        autor={item.autor}
                        dissLikeCount={item.dissLikeCount}
                        likeCount={item.likeCount}
                        inserDate={item.inserDate}
                    />
                )
            })}
        </div>
        </>
    )
}

export {ModalComments}