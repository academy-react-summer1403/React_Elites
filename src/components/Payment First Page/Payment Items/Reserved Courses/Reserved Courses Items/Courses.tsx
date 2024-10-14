import React from 'react'
import style from './Items.module.css'
import { Image } from './Image'
import { Title } from './Title'
import { Price } from './Price'

const Courses = () => {
  return (
    <div className={style.coursesHolder}>
        <Price />
        <Title />
        <Image />
    </div>
  )
}

export {Courses}