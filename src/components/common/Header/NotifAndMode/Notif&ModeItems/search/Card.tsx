import React, { useState } from 'react'
import style from './SeachModal.module.css'
import { NavLink } from 'react-router-dom'

const CardModal = ({id,title,desc}) => {

    return (
        <div className={style.Card}>
            <div className={style.CardHeader}>{title}</div>
            <div className={style.CardBody}>{desc}</div>
            <NavLink to={id} className={style.CardBottom}>مشاهده جزییات این دوره</NavLink>
        </div>
    )
}

export { CardModal }