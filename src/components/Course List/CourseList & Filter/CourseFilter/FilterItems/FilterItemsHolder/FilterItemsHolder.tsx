import React, { useEffect, useState } from 'react'
import style from './Holder.module.css'
import { Title } from './Title'
import { Search } from '../FilterSearch/Search'
import { Category } from '../FilterCategory/Category'
import { Level } from '../FilterLevel/Level'
import { Teacher } from '../FilterTeacher/Teacher'
import { Price } from '../FilterPrice/Price'
import { Date } from '../FilterDate/Date'
import { useTranslation } from "react-i18next";
import { useGlobalState } from '../../../../../../State/State'

const FilterItemsHolder = ({setTeacherId, minValueBining, maxValueBining, maxValue, minValue, set_minValue, set_maxValue, setcategoryId, setApplyFilter, applyFilter, setLevelId, setSearchValue, setIsSearched, searchValue, isSearched}) => {
  const { t } = useTranslation();
  return (
    <div className={style.holder}>
        <Title />
        <Search setSearchValue={setSearchValue} setIsSearched={setIsSearched} searchValue={searchValue} isSearched={isSearched}/>
        <Category setcategoryId={setcategoryId} />
        <Level setLevelId={setLevelId}/>
        <Teacher setTeacherId={setTeacherId}/>
        <Price 
          minValueBining={minValueBining}
          maxValueBining={maxValueBining}
          maxValue={maxValue}
          minValue={minValue}
          set_minValue={set_minValue}
          set_maxValue={set_maxValue}
        />
        <span className={style.deleteFilter} onClick={() => {
          setApplyFilter(false);
          setTeacherId("")
          setLevelId("")
          setcategoryId(2)
          set_minValue("1000000000")
          set_maxValue("1000")
        }}> {t("deleteFilter")} </span>
        <span className={applyFilter ? style.applyFilter2 : style.applyFilter} onClick={() => {
          setApplyFilter(true);
        }}> {t("applyFilter")} </span>

    </div>
  )
}

export {FilterItemsHolder}