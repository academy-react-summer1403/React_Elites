import React from 'react'
import style from '../../../../../Style/LogInOrRegister.module.css'
import { NavLink } from 'react-router-dom';

const LogInOrRegister = () => {
  return (
    <NavLink to="/Login" className={style.container}>ثبت نام یا ورود</NavLink>
  )
}

export { LogInOrRegister };