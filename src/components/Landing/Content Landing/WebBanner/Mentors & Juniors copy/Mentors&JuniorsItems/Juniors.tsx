import React from 'react'
import style from './Juniors.module.css'


const Juniors = (props) => {
  return (
    <div className={style.container}>
      <div className={style.juniors}></div>
      <div className={style.studentCount}> + {props.studentCount.studentCount} </div>
      <div className={style.title}>دانشجو فعال در دوره</div>
    </div>
  )
}

export {Juniors}