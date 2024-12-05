import React, { useState } from 'react'
import style from './Top.module.css'
import { TopItems } from './TopItems'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
import { useGlobalState } from '../../../../../../State/State';
const TopHolder = ({clicked, setClicked, sortModal, setSortModal, setSortType, setCol, applySort, setapplySort}) => {

  const [isGrid, setIsGrid] = useGlobalState('isGrid');
  const { t } = useTranslation();

  return (
    <div className={style.holder}>
      <div data-theme={identifier("gridView")} className={isGrid ? `${style.gridView} ${style.selectedG}` : `${style.gridView}`} onClick={() => {
        setIsGrid(!isGrid)
      }}></div>
      <div data-theme={identifier("listView")} className={isGrid == false ? `${style.listView} ${style.selectedG}` : `${style.listView}`} onClick={() => {
        setIsGrid(!isGrid)
      }}></div>
      <div className={style.title} data-theme={identifier("dark")} >{t("order")} </div>
      <TopItems clicked={clicked} setapplySort={setapplySort} applySort={applySort} setClicked={setClicked} sortModal={sortModal} setSortModal={setSortModal} setSortType={setSortType} setCol={setCol}/>
    </div>
  )
}

export {TopHolder}