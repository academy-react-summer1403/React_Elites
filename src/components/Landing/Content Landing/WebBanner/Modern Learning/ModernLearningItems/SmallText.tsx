import React from 'react'
import style from './SmallText.module.css'
import styleDark from './../../../../../../Style/DarkMode.module.css'

const SmallText = () => {
  return (
    <div className={`${style.smallText} ${styleDark.smallText}`}>آکادمی آموزش تخصصی برنامه نویسی بحر  <br /> از کودکان تا بزرگسال</div>
  )
}

export {SmallText}