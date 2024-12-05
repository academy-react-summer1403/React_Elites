import React, { useState } from 'react'
import style from './SeachModal.module.css'
import { NavLink } from 'react-router-dom'
import { useGlobalState } from '../../../State/State';

const CardModal = ({ id, title, desc, image, NavLinkTitle, NavTitle }) => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [courseId, setCourseId] = useGlobalState('courseIdCompare');
    return (
        <div className={style.Card} data-theme={darkMode ? "dark" : "lightMode"}>
            <div className={style.CardBody}>
                <img src={image && image.slice(0,5) == "https" && image !== null ? image : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} />
                <div>
                    <div data-theme={darkMode ? "darkNoBG" : "lightMode"} className={style.CardTitle}>{title}</div>
                    <div data-theme={darkMode ? "darkNoBG" : "lightMode"} className={style.CardDesc}>{desc}</div>
                </div>
            </div>
            <div className={style.CardBottom} onClick={() => setCourseId(id)}> انتخاب {NavTitle}</div>
        </div>
    )
}

export { CardModal }