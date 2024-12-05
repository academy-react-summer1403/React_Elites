import React from 'react'
import style from './style.module.css'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';

const View = (props) => {

  return (
    <div className={style.view} data-theme={identifier("ViewBlog")}>{props.view} </div>
  )
}

export {View}