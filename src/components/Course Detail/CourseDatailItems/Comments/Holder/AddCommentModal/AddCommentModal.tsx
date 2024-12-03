import React, { useEffect, useState } from 'react'
import style from './Modal.module.css'
import { useSpring, animated, useTransition } from '@react-spring/web'
import { ModalComments } from './Modal Comments/ModalComments'
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';
import { postCourseComment } from '../../../../../../core/services/api/postCommentCourse';
import toast, { Toaster } from 'react-hot-toast';
import { postCourseReplyComment } from '../../../../../../core/services/api/postCourseReplyComment';
import { useGlobalState } from '../../../../../../State/State';

const AddCommentModal = ({comments, isOpen, onClose, id, title}) => {
    const { t } = useTranslation();
    const [addYourComment, setaddYourComment] = useState(false)
    const [isReplying, setIsReplying] = useGlobalState('isReplying');
    const [commentId, setCommentId] = useGlobalState('courseCommentId');
    const [isLogin, setIsLogin] = useGlobalState('isLogin');

    const handleEscape = e => {
        if(e.keyCode == 27) {
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [])
    

    const modalTransition = useTransition(isOpen, {
        from: { opacity: 0},
        enter: { opacity: 1},
        leave: { opacity: 1},
        config: {
            duration: 300
        }
    })

    const springs = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
        config: {
            duration: 300
        }
    })

    return modalTransition((styles, isOpen) => isOpen && (
        <>
        <animated.div style={styles} className={style.overLay} onClick={onClose}></animated.div>
            {addYourComment === true && 
                    <Formik
            initialValues={{Title: '', Describe: '', CourseId: id}}
            onSubmit={async (values) => {
                let res = await postCourseComment(values)
                console.log(res)
                if(res.success === true){
                    toast.success("نظر شما به دوره اضافه شد")
                }
                else if(isLogin === false){
                    toast.error("لطفا به حساب کاربری خود وارد شوید")
                }
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
            </Formik>
            }
            {isReplying === true &&
                <Formik
                initialValues={{CommentId: commentId, CourseId: id, Title: '', Describe: ''}}
                onSubmit={async (values) => {
                    let res = await postCourseReplyComment(values)
                    if(res.success === true){
                        toast.success("پاسخ شما به کامنت اضافه شد")
                    }
                    else if(isLogin === false){
                        toast.error("لطفا به حساب کاربری خود وارد شوید")
                    }
                }}
            > 
            <Form >
            <div className={style.addCommentInput}>
            <div className={style.inputHolders}>
                    <Field name='Title' className={`${style.inputs} ${style.borderG}`} placeholder='عنوان پاسخ خود را بنویسید' />
                    <Field name='Describe' className={style.inputs} placeholder='متن پاسخ خود را بنویسید' />
                </div>
                <button type='submit' className={style.send}></button>
            </div>
            </Form>
            </Formik>}
        <animated.div style={springs} className={style.holder}>
            <div className={style.header}>
                <div className={style.close} onClick={() => {
                    onClose()
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
                    courseId={id}
                    key={index}
                    title={item.title}
                    describe={item.describe}
                    author={item.author}
                    dissLikeCount={item.disslikeCount}
                    likeCount={item.likeCount}
                    insertDate={item.insertDate}
                    id={item.id}
                    pictureAddress={item.pictureAddress}
                    currentUserEmotion={item.currentUserEmotion}
                />
            )
        })}
        </animated.div>
        </>
    ))
}

export {AddCommentModal}