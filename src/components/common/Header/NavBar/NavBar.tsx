import React from 'react'
import { NavBarItems } from './NavBarItems/NavBarItems.tsx'
import { LogInOrRegister } from './LogInOrRegister/LogInOrRegister.tsx'
import style from '../../../../Style/NavBar.module.css'

const NavBar = () => {
    return (
        <div className={style.container}>
            <LogInOrRegister />
            <NavBarItems />
        </div>
    )
}

export {NavBar}