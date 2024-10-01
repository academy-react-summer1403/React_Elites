import React from 'react';
import { NotifAndMode } from '../NotifAndMode/NotifAndMode.tsx';
import { NavBar } from '../NavBar/NavBar.tsx';
import { Logo } from '../Logo/Logo.tsx';
import style from '../../../../Style/Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
                <NotifAndMode />
                <NavBar />
                <Logo />
        </div>
    )
}

export {Header};