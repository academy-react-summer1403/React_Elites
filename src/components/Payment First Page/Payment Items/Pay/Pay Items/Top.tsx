import React from 'react'
import style from './Items.module.css'
import { Price } from './Price'
import { TextAndNumber } from './TextAndNumber'

const Top = () => {
  return (
    <div className={style.top}>
        <TextAndNumber />
        <Price />
    </div>
  )
}

export {Top}