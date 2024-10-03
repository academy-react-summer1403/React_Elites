import React from 'react'
import style from './GridItemsHolder.module.css'
import { GridItemsTitle } from '../GridItemsTitle/GridItemsTitle'
import { Description } from '../GridItemsDescription/Description'
import { Image } from '../GridItemsImage/Image'

const GridItemsHolder = (props) => {

  return (
    <div className={style.holder}>
      <GridItemsTitle title={props.title} />
      <Description description={props.description} />
      <Image image={props.image} />
    </div>
  )
}

export {GridItemsHolder}