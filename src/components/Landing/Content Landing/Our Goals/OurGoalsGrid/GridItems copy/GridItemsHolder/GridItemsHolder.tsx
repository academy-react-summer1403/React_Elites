import React from 'react'
import style from './GridItemsHolder.module.css'
import { GridItemsTitle } from '../GridItemsTitle/GridItemsTitle'
import { Description } from '../GridItemsDescription/Description'
import { Image } from '../GridItemsImage/Image'
import styleDark from './../../../../../../../Style/DarkMode.module.css'

const GridItemsHolderTwo = () => {

  return (
    <div className={`${style.holder} ${styleDark.holder}`}>
      <GridItemsTitle />
      <Description />
      <Image />
    </div>
  )
}

export {GridItemsHolderTwo}