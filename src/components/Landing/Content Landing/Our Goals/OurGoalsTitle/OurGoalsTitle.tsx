import React from 'react'
import style from './OurGoalsTitle.module.css'
import styleDark from './../../../../../Style/DarkMode.module.css'

const OurGoalsTitle = () => {
    return (
        <div className={`${style.title} ${styleDark.title}`}>اهداف ما در آکادمی</div>
    )
}

export {OurGoalsTitle}