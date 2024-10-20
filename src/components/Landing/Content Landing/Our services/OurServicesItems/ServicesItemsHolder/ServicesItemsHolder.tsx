import React from 'react'
import style from './ServicesItemsHolder.module.css'
import { Image } from '../image'
import { TitleAndDescHolder } from '../ServicesTitleAndDesc/TitleAndDescHolder'
import styleDark from './../../../../../../Style/DarkMode.module.css'


const ServicesItemsHolder = (props) => {
  return (
    <div className={`${style.holder} ${styleDark.holderService}`}>
      <Image image={props.image} />
      <TitleAndDescHolder title={props.title} desc={props.desc}/>
    </div>
  )
}

export {ServicesItemsHolder}