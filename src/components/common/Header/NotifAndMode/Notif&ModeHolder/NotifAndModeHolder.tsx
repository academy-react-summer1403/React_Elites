import React from 'react'
import style from '../../../../../Style/NotifAndMode.module.css'
import { Notification } from '../Notif&ModeItems/Notification'
import { DarkOrLightMode } from '../Notif&ModeItems/DarkOrLightMode'
import { MiniBasket } from '../Notif&ModeItems/miniBasket'
import { Menu } from '../Notif&ModeItems/Menu'
import { User } from '../Notif&ModeItems/User'

const NotifAndModeHolder = () => {
  return (
    <div className={style.container}>
      
      <Notification />
      <Menu />
      <User />
      <MiniBasket /> 
    </div>
  )
}

export {NotifAndModeHolder}