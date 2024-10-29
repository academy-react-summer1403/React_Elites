import React from 'react'
import { NavBarItems } from './NavBarItems/NavBarItems.tsx'
import { LogInOrRegister } from './LogInOrRegister/LogInOrRegister.tsx'
import style from '../../../../Style/NavBar.module.css'
import { useGlobalState } from '../../../../State/State.tsx'
import { User } from './NavBarItems/User.tsx'
import { getItem } from '../../../../core/services/storage/storage.services.ts'

const NavBar = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [isLogin, setIsLogin] = useGlobalState('isLogin');

    let loginStatus = getItem('isLogin')
    return (
        <div className={style.container} data-theme={darkMode ? "dark" : "lightMode"}>
            { isLogin ? <User /> : <LogInOrRegister />}
            <NavBarItems />
        </div>
    )
}

export {NavBar}