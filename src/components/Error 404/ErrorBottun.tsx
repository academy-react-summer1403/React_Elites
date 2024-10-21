import React from 'react'
import style from './Error.module.css'
import { NavLink } from 'react-router-dom'

const ErrorBottun = () => {
  return (
    <NavLink to="/" className={style.homePage}> بازگشت به صفحه اصلی  </NavLink>
  )
}

export {ErrorBottun}