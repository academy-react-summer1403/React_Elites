import React, { useState } from 'react'
import style from './Modal.module.css'
import { ModalComments } from './Modal Comments/ModalComments'
import { useTranslation } from 'react-i18next';
import { useGlobalState } from '../../../../../../State/State';
import { Modal } from 'antd';
import { Field, Formik } from 'formik';
import { Form } from 'react-router-dom';

const AddCommentModal = ({comments, title, isModalOpen, setIsModalOpen}) => {
    const { t } = useTranslation();
    const [addYourComment, setaddYourComment] = useState(false)
    const [isLogin, setIsLogin] = useGlobalState('isLogin');

      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    return (
        <>
            <Modal closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{overflow: "scroll", height: "600px"}}>
            {addYourComment === true && 
            <Formik
            initialValues={{Title: '', Describe: ''}}
            onSubmit={async (values) => {
                // let res = await 
                // if(res.success === true){
                //     toast.success("نظر شما به بلاگ اضافه شد")
                // }
                // else if(isLogin === false){
                //     toast.error("لطفا به حساب کاربری خود وارد شوید")
                //   }
            }}
            >
            <Form >
            <div className={style.addCommentInput}>
            <div className={style.inputHolders}>
                    <Field name='Title' className={`${style.inputs} ${style.borderG}`} placeholder='عنوان نظر خود را بنویسید' />
                    <Field name='Describe' className={style.inputs} placeholder='متن نظر خود را بنویسید' />
                </div>
                <button type='submit' className={style.send}></button>
            </div>
            </Form>
            </Formik>}
            <div className={style.header}>
                <div className={style.close} onClick={() => {
                }}> {t("close")} 
                    <div className={style.closeIcon}></div>
                </div>
                <div className={style.titleHolder}>
                <div className={style.titleBlog}>({title})</div>
                    <div className={style.titleModal}> نظرات دانشجو ها و اساتید </div>
                </div>
            </div>
            <div className={style.yourCommentHodler}>
                <div className={style.addComment} onClick={() => setaddYourComment(!addYourComment)}>نظر شما 
                    <div className={style.addCommentIcon}></div>
                </div>
            </div>
            {comments.map((item, index) => {
                return (
                    <ModalComments
                        pictureAddress={item.pictureAddress}
                        key={index}
                        title={item.title}
                        describe={item.describe}
                        autor={item.autor}
                        dissLikeCount={item.dissLikeCount}
                        likeCount={item.likeCount}
                        inserDate={item.inserDate}
                        id={item.id}
                        currentUserIsLike={item.currentUserIsLike}
                        currentUserIsDissLike={item.currentUserIsDissLike}
                    />
                )
            })}
        </Modal>
        </>
    )
}

export {AddCommentModal}