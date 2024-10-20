import React from 'react'
import style from './style.module.css'
import { Title } from './Title'
import { Content } from './Content'
import { Footer } from './Footer'

const Comment = () => {
  return (
    <div className={style.comments}>
        <Title />
        <Content />
        <Footer />
    </div>
  )
}

export {Comment}