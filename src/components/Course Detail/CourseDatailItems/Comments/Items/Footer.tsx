import React from 'react'
import style from './style.module.css'
import Bahr from '../../../../../assets/Images/Bahr.jpg'
import { useGlobalState } from '../../../../../State/State';

const Footer = ({pictureAddress, author, disslikeCount, likeCount, insertDate}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const dateConvertor = (date) => {
      var miladi2 = date.slice(0, 10)
      var year = miladi2.slice(0, 4)
      var month = miladi2.slice(5,7)
      if(month == 1){
        month = "ژانویه"
      }
      else if(month == 2){
        month = "فوریه"
      }
      else if(month == 3){
        month = "مارس"
      }
      else if(month == 4){
        month = "آوریل"
      }
      else if(month == 5){
        month = "می"
      }
      else if(month == 6){
        month = "ژوئن"
      }
      else if(month == 7){
        month = "جولای"
      }
      else if(month == 8){
        month = "آگوست"
      }
      else if(month == 9){
        month = "سپتامبر"
      }
      else if(month == 10){
        month = "اکتبر"
      }
      else if(month == 11){
        month = "نوامبر"
      }
      else if(month == 12){
        month = "دسامبر"
      }
      var day = miladi2.slice(8,10)
      var dateMiladii = `${day} ${month} ${year}`
      return dateMiladii
    }
  return (
    <div className={style.footer}>
        <div className={style.likeAndDislikes}>
            <div className={style.count} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{likeCount}</div>
            <div className={style.like}></div>
            <div className={style.count} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{disslikeCount}</div>
            <div className={style.dislike}></div>
        </div>
        <div className={style.user}>
            <div className={style.username} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{author}</div>
            <img className={style.profile} src={pictureAddress} />
            <div className={style.date} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{dateConvertor(insertDate)}</div>
        </div>
    </div>
  )
}

export {Footer}