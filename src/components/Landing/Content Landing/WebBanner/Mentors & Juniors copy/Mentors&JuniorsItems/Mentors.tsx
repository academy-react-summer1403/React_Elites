import React from 'react'
import style from './Mentors.module.css'

const Mentors = (props) => {
  return (
    <div className={style.container}>
      <div className={style.mentors}></div>
      <div className={style.teacherCount}> + {props.teacherCount.teacherCount} </div>
      <div className={style.title}>اساتید برتر جهان</div>
    </div>

  )
}

export {Mentors}