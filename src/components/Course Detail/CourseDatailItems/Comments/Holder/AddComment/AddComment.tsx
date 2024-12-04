import React, { useState } from 'react'
import style from '../AllComments.module.css'
import { AddCommentModal } from '../AddCommentModal/AddCommentModal'

const AddComment = ({comments, id, title}) => {
  const [openModal, setOpenModal] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
        <div className={style.addComment} onClick={() => showModal()}>
            <div className={style.add}></div>
            <div className={style.bigText}> نظر شما </div>
            <div className={style.smallText}> برای نظر دادن کلیک کنید </div>
        </div>
        <AddCommentModal isModalOpen={isModalOpen} title={title} id={id} comments={comments} setIsModalOpen={setIsModalOpen}/>
    </>
  )
}

export {AddComment}