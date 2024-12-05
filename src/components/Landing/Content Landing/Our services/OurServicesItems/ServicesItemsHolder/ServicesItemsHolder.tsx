import React from 'react'
import style from './ServicesItemsHolder.module.css'
import { Image } from '../image'
import { TitleAndDescHolder } from '../ServicesTitleAndDesc/TitleAndDescHolder'

import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier'

const ServicesItemsHolder = (props) => {

  return (
    <div className={style.holder} data-theme={identifier("darkSmall")}>
      <Image image={props.image} />
      <TitleAndDescHolder title={props.title} desc={props.desc}/>
    </div>
  )
}

export {ServicesItemsHolder}