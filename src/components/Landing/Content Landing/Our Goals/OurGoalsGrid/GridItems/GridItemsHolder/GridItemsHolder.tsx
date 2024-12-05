import React from 'react'
import style from './GridItemsHolder.module.css'
import { GridItemsTitle } from '../GridItemsTitle/GridItemsTitle'
import { Description } from '../GridItemsDescription/Description'
import { Image } from '../GridItemsImage/Image'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
const GridItemsHolder = (props) => {


  return (
    <div className={style.holder}  data-theme={identifier("dark")}>
      <GridItemsTitle />
      <Description />
      <Image />
    </div>
  )
}

export {GridItemsHolder}