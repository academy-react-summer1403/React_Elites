import React from 'react'
import style from './Items.module.css'
import { NavLink } from 'react-router-dom'

const Button = () => {
  return (
    <NavLink to="/Payment-Gateway" className={style.pay}> پرداخت </NavLink>
  )
}

export {Button}