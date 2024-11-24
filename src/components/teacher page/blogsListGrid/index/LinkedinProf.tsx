import React from 'react'
import style from './Title&courseHolder.module.css'

const LinkedinProf = ({LinkedinProf}) => {
  return (
    <a href={LinkedinProf} className={style.linkedin}>{LinkedinProf}</a>
  )
}

export {LinkedinProf}