import React from 'react'
import style from './Teachers.module.css'
import { Right } from '../TeachersItems/Right'
import { Graphic } from '../TeachersItems/Graphic/Graphic'

const Teachers = () => {
  return (
    <div className={style.container}>
        <Right />
        <Graphic />

    </div>
  )
}

export {Teachers}