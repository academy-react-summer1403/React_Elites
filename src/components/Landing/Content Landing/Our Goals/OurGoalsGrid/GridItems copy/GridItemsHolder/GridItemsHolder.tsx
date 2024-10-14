import React from 'react'
import style from './GridItemsHolder.module.css'
import { GridItemsTitle } from '../GridItemsTitle/GridItemsTitle'
import { Description } from '../GridItemsDescription/Description'
import { Image } from '../GridItemsImage/Image'

const GridItemsHolderTwo = () => {

  return (
    <div className={style.holder}>
      <GridItemsTitle />
      <Description />
      <Image />
    </div>
  )
}

export {GridItemsHolderTwo}