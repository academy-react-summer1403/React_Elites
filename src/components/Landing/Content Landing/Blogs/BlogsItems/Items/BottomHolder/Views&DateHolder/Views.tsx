import React from 'react'
import style from './ViewsAndDate.module.css'

import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';
const Views = (props) => {

  return (
    <div className={style.views} data-theme={identifier("ViewBlog","ViewBlog2")}>{props.views}</div>
  )
}

export {Views}