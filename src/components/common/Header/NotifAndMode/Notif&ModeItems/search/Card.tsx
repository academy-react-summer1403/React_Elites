import React, { useState } from 'react'
import style from './SeachModal.module.css'
import { NavLink } from 'react-router-dom'

const CardModal = ({ id, title, desc, image, NavLinkTitle, NavTitle }) => {

    return (
        <div className={style.Card}>
            <div className={style.CardBody}>
                <img src={image && image.slice(0,5) == "https" && image !== null ? image : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} />
                <div>
                    <div className={style.CardTitle}>{title}</div>
                    <div className={style.CardDesc}>{desc}</div>
                </div>
            </div>
            <NavLink to={NavLinkTitle + id} className={style.CardBottom}>مشاهده جزییات این {NavTitle}</NavLink>
        </div>
    )
}

export { CardModal }