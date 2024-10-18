import React from 'react'
import style from './GridItemsHolder.module.css'
import { GridItemsTitle } from '../GridItemsTitle/GridItemsTitle'
import { Description } from '../GridItemsDescription/Description'
import { Image } from '../GridItemsImage/Image'

const GridItemsHolderFour = () => {

  return (
    <div className={style.holder}>
      <GridItemsTitle />
      <Description />
      <Image />
    </div>
  )
}

export {GridItemsHolderFour}