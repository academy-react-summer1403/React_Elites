import React from 'react'
import style from './Top.module.css'
import { TopItems } from './TopItems'
import { useGlobalState } from '../../../../../../../State/State';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const SortModal = ({setSortModal,applySort, setapplySort, setSortType, setCol,}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.container}  data-theme={identifier("dark")}>
      <TopItems setSortType={setSortType} setCol={setCol} setapplySort={setapplySort} applySort={applySort} setSortModal={setSortModal} />
    </div>
  )
}

export {SortModal}