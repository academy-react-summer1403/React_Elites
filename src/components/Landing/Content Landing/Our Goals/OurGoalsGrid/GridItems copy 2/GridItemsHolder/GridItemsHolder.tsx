import React from 'react'
import style from './GridItemsHolder.module.css'
import { GridItemsTitle } from '../GridItemsTitle/GridItemsTitle'
import { Description } from '../GridItemsDescription/Description'
import { Image } from '../GridItemsImage/Image'
import { useGlobalState } from '../../../../../../../State/State'
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
const GridItemsHolderThree = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.holder} data-theme={identifier("dark")}>
      <GridItemsTitle />
      <Description />
      <Image />
    </div>
  )
}

export {GridItemsHolderThree}