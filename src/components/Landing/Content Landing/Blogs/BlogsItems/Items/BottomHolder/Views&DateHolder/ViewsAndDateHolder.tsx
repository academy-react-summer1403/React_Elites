import React from 'react'
import style from './ViewsAndDate.module.css'
import { Views } from './Views'
import { Date } from './Date'

const ViewsAndDateHolder = ({views}) => {
  return (
    <div className={style.holder}>
        <Views views={views} />
    </div>
  )
}

export {ViewsAndDateHolder}