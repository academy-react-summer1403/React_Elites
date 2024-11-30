import React from 'react'
import style from './Content.module.css'
import { ContentLeft } from '../Items/ContentLeft'
import { ContentRight } from '../Items/ContentRight'

const Content = ({price}) => {
  return (
    <div className={style.content}>
        <ContentLeft price={price}/>
        <ContentRight />
    </div>
  )
}

export {Content}