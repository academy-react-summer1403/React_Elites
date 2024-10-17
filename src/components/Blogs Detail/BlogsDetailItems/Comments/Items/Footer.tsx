import React from 'react'
import style from './style.module.css'
import Bahr from '../../../../../assets/Images/Bahr.jpg'

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.likeAndDislikes}>
            <div className={style.count}>1</div>
            <div className={style.like}></div>
            <div className={style.count}>20</div>
            <div className={style.dislike}></div>
        </div>
        <div className={style.user}>
            <div className={style.username}>مهدی امیرخانی</div>
            <img className={style.profile} src={Bahr} />
            <div className={style.date}>29 اردیبهشت 1403</div>
        </div>
    </div>
  )
}

export {Footer}