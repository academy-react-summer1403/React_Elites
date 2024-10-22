import React from 'react'
import style from './OurGoalsTitle.module.css'
import { useGlobalState } from '../../../../../State/State';

const OurGoalsTitle = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    return (
        <div className={style.title}  data-theme={darkMode ? "dark" : "lightMode"}>اهداف ما در آکادمی</div>
    )
}

export {OurGoalsTitle}