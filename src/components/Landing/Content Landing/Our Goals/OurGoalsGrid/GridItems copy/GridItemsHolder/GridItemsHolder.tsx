import React from 'react'
import style from './GridItemsHolder.module.css'
import { GridItemsTitle } from '../GridItemsTitle/GridItemsTitle'
import { Description } from '../GridItemsDescription/Description'
import { Image } from '../GridItemsImage/Image'
import { useGlobalState } from '../../../../../../../State/State'

const GridItemsHolderTwo = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holder} data-theme={darkMode ? "dark" : "lightMode"}>
      <GridItemsTitle />
      <Description />
      <Image />
    </div>
  )
}

export {GridItemsHolderTwo}