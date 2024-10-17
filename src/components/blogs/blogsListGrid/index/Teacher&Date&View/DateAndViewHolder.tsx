import React from 'react'
import style from './style.module.css'
import { Date } from './Date'
import { View } from './view'


const ViewAndDateHolder = (props) => {
  return (
    <div className={style.ViewAndDateHolder}>
        <View view={props.view} />
        <Date date={props.date} />
    </div>
  )
}

export {ViewAndDateHolder}