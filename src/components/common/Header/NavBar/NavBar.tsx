import React from 'react'
import { NavBarItems } from './NavBarItems/NavBarItems.tsx'
import { LogInOrRegister } from './LogInOrRegister/LogInOrRegister.tsx'
import style from '../../../../Style/NavBar.module.css'
import { useGlobalState } from '../../../../State/State.tsx'

const NavBar = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    return (
        <div className={style.container} data-theme={darkMode ? "dark" : "lightMode"}>
            <LogInOrRegister />
            <NavBarItems />
        </div>
    )
}

export {NavBar}