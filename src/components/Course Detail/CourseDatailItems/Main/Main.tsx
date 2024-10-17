import React from 'react'
import style from './Main.module.css'
import { BigImage } from './BigImage/BigImage'
import { BigDetail } from './BigDetail/BigDetailHolder/BigDetail'

const Main = () => {
  return (
    <div className={style.main}>

        <BigDetail />
        <BigImage />

    </div>
  )
}

export {Main}