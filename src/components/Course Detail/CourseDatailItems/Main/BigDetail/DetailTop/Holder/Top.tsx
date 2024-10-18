import React from 'react'
import style from './Top.module.css'
import { Status } from '../TopItems/Status'
import { Level } from '../TopItems/Level'
import { Category } from '../TopItems/Category'
import { Teacher } from '../TopItems/Teacher'

const Top = () => {
  return (
    <div className={style.top}>
        <Teacher />
        <Category />
        <Level />
        <Status />
    </div>
  )
}

export { Top}