import React from 'react'
import style from '../style.module.css'

const Title = (props) => {
  return (
    <div className={style.title}> {props.title}</div>
  )
}

export {Title}