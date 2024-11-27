import React, { useState } from 'react'
import style from './Top.module.css'
import { TopItems } from './TopItems'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const TopHolder = ({clicked, setClicked, sortModal, setSortModal, setSortType, setCol, applySort, setapplySort}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isGrid, setIsGrid] = useGlobalState('isGrid');
  const { t } = useTranslation();

  return (
    <div className={style.holder}>
      <div data-theme={darkMode ? "gridView" : "lightMode"} className={isGrid ? `${style.gridView} ${style.selectedG}` : `${style.gridView}`} onClick={() => {
        setIsGrid(!isGrid)
      }}></div>
      <div data-theme={darkMode ? "listView" : "lightMode"} className={isGrid == false ? `${style.listView} ${style.selectedG}` : `${style.listView}`} onClick={() => {
        setIsGrid(!isGrid)
      }}></div>
      <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"} >{t("order")} </div>
      <TopItems clicked={clicked} setapplySort={setapplySort} applySort={applySort} setClicked={setClicked} sortModal={sortModal} setSortModal={setSortModal} setSortType={setSortType} setCol={setCol}/>
    </div>
  )
}

export {TopHolder}