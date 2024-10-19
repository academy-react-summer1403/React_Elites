import React from 'react'
import style from './Items.module.css'
import figmaCourse from '../../../../../assets/Images/FigmaCourse.png'

const Image = () => {
  return (
    <>
        <img src={figmaCourse} className={style.image} />
    </>
  )
}

export {Image}