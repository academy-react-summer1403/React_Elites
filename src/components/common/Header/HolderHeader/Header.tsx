import React from 'react';
import { NotifAndModeHolder } from '../NotifAndMode/Notif&ModeHolder/NotifAndModeHolder.tsx';
import { NavBar } from '../NavBar/NavBar.tsx';
import { Logo } from '../Logo/LogoHolder/Logo.tsx';
import style from '../../../../Style/Header.module.css'
import { useGlobalState } from '../../../../State/State.tsx';

const Header = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    return (
        <div className={style.header} data-theme={darkMode ? "darkSmall" : "lightMode"}>
                <NotifAndModeHolder />
                <NavBar />
                <Logo />
        </div>
    )
}

export {Header};