import React, { useState } from 'react'
import style from './Top.module.css'
import { TopItems } from './TopItems'
import { useGlobalState } from '../../../../../../State/State';

const TopHolder = ({clicked, setClicked, sortModal, setSortModal, setSortType, setCol, applySort, setapplySort}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.holder}>
      <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"} >ترتیب </div>
      <TopItems clicked={clicked} setapplySort={setapplySort} applySort={applySort} setClicked={setClicked} sortModal={sortModal} setSortModal={setSortModal} setSortType={setSortType} setCol={setCol}/>
    </div>
  )
}

export {TopHolder}