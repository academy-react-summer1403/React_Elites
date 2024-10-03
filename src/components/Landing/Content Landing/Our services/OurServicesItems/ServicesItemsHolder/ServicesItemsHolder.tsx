import React from 'react'
import style from './ServicesItemsHolder.module.css'
import { Image } from '../image'
import { TitleAndDescHolder } from '../ServicesTitleAndDesc/TitleAndDescHolder'


const ServicesItemsHolder = (props) => {
  return (
    <div className={style.holder}>
      <TitleAndDescHolder title={props.title} desc={props.desc}/>
      <Image image={props.image} />
    </div>
  )
}

export {ServicesItemsHolder}