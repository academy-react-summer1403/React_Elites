import React from 'react'
import style from './OurGoalsHolder.module.css'
import { OurGoalsTitle } from '../OurGoalsTitle/OurGoalsTitle'
import { GridHolder } from '../OurGoalsGrid/GridHolder/GridHolder'

const OurGoalsHolder = () => {
  return (
    <div className={style.container}>
        <OurGoalsTitle />
        <GridHolder />
    </div>
  )
}

export {OurGoalsHolder}