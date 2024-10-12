import React from 'react'
import style from './style.module.css'
import { Title } from './title'
import { Content } from './Content'

const Comment = () => {
  return (
    <div className={style.comments}>
        <Title />
        <Content />
    </div>
  )
}

export {Comment}