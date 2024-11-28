import React, { useState } from 'react'
import style from './Top.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const TopItems = ({setSortModal, applySort, setapplySort, setSortType, setCol}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [isClicked4, setIsClicked4] = useState(false)
  return (
    <>
    <div className={style.container1}>
    <div className={style.closeBtn} onClick={() => setSortModal(false)}> بستن </div>
      <div className={style.clearSort} data-theme={darkMode ? "darkClearSort" : "lightMode"} onClick={() => {
        setapplySort(false)
        setIsClicked1(false)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(false)
      }}>
      </div>
    </div>
      <div className={isClicked1 ? style.selected : style.categories} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
        setCol("insertDate")
        setapplySort(true)
        setIsClicked1(!isClicked1)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(false)
        if (applySort === false) {
          setapplySort(true)
        }
        setSortType("DESC")
      }}>{t("newest")}</div>
      <div className={isClicked2 ? style.selected : style.categories} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
        setCol("insertDate")
        setapplySort(true)
        setIsClicked1(false)
        setIsClicked2(!isClicked2)
        setIsClicked3(false)
        setIsClicked4(false)
        setSortType("ASC")
      }}> {t("oldest")} </div>
      <div className={isClicked3 ? style.selected : style.categories} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
        setCol("Cost")
        setapplySort(true)
        setIsClicked1(false)
        setIsClicked2(false)
        setIsClicked3(!isClicked3)
        setIsClicked4(false)
        setSortType("DESC")
      }}> {t("mostExpensive")}</div>
      <div className={isClicked4 ? style.selected : style.categories} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
        setCol("Cost")
        setapplySort(true)
        setIsClicked1(false)
        setIsClicked2(false)
        setIsClicked3(false)
        setIsClicked4(!isClicked4)
        setSortType("ASC")
      }}>{t("cheapest")}</div>
    </>
  )
}

export {TopItems}