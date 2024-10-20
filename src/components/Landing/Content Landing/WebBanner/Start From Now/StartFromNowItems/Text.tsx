import React from 'react'
import style from './Text.module.css'
import styleDark from './../../../../../../Style/DarkMode.module.css'

const Text = () => {
  return (
    <div className={`${style.text} ${styleDark.text}`}> همین حالا <br /> شروع کن به یادگیری</div>
  )
}

export {Text}