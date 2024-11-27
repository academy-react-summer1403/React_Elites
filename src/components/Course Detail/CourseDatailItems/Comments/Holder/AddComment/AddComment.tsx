import React, { useState } from 'react'
import style from '../AllComments.module.css'
import { AddCommentModal } from '../AddCommentModal/AddCommentModal'

const AddComment = ({comments, id, title}) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
        <div className={style.addComment} onClick={() => setOpenModal(!openModal)}>
            <div className={style.add}></div>
            <div className={style.bigText}> نظر شما </div>
            <div className={style.smallText}> برای نظر دادن کلیک کنید </div>
        </div>
        <AddCommentModal title={title} id={id} comments={comments} isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}

export {AddComment}