import React from 'react';
import { NotifAndModeHolder } from '../NotifAndMode/Notif&ModeHolder/NotifAndModeHolder.tsx';
import { NavBar } from '../NavBar/NavBar.tsx';
import { Logo } from '../Logo/LogoHolder/Logo.tsx';
import style from '../../../../Style/Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
                <NotifAndModeHolder />
                <NavBar />
                <Logo />
        </div>
    )
}

export {Header};