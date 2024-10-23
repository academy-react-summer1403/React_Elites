import React from 'react'
import style from './Top.module.css'
import { TopItems } from './TopItems'
import { useGlobalState } from '../../../../../../../State/State';

const SortModal = ({setSortModal}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.container}  data-theme={darkMode ? "dark" : "lightMode"}>
      <TopItems setSortModal={setSortModal} />
    </div>
  )
}

export {SortModal}