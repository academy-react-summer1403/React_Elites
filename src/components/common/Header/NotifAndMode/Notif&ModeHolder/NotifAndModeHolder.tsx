import React from 'react'
import style from '../../../../../Style/NotifAndMode.module.css'
import { Notification } from '../Notif&ModeItems/Notification'
import { DarkOrLightMode } from '../Notif&ModeItems/DarkOrLightMode'

const NotifAndModeHolder = () => {
  return (
    <div className={style.container}>
      <DarkOrLightMode />
      <Notification />
    </div>
  )
}

export {NotifAndModeHolder}