import React, { useEffect } from 'react'
import style from './Modal.module.css'
import { useSpring, animated, useTransition } from '@react-spring/web'
import { ModalComments } from './Modal Comments/ModalComments'
import { useTranslation } from 'react-i18next';

const AddCommentModal = ({comments, isOpen, onClose}) => {
    const { t } = useTranslation();

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
        <animated.div style={springs} className={style.holder}>
            <div className={style.header}>
                <div className={style.close} onClick={() => {
                    onClose()
                }}> {t("close")} 
                    <div className={style.closeIcon}></div>
                </div>
            <div className={style.titleHolder}>
            <div className={style.titleBlog}>( فیگما یا ادوبه ایکس دی ؟ )</div>
                <div className={style.titleModal}> نظرات دانشجو ها و اساتید </div>
            </div>
        </div>
        <div className={style.yourCommentHodler}>
            <div className={style.addComment}>نظر شما 
                <div className={style.addCommentIcon}></div>
            </div>
        </div>
        {comments.map((item, index) => {
            return (
                <ModalComments
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
        </animated.div>
        </>
    ))
}

export {AddCommentModal}