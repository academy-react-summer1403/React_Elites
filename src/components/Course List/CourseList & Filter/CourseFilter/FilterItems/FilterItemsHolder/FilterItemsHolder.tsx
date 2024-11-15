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

const FilterItemsHolder = ({setTeacherId, setApplyFilter, applyFilter, setLevelId, setSearchValue, setIsSearched, searchValue, isSearched}) => {
  const { t } = useTranslation();
  return (
    <div className={style.holder}>
        <Title />
        <Search setSearchValue={setSearchValue} setIsSearched={setIsSearched} searchValue={searchValue} isSearched={isSearched}/>
        <Category />
        <Level setLevelId={setLevelId}/>
        <Teacher  setTeacherId={setTeacherId}/>
        <Price />
        <Date />
        <span className={style.deleteFilter} onClick={() => {
          setApplyFilter(false);
          setTeacherId("")
          setLevelId("")
        }}> {t("deleteFilter")} </span>
        <span className={applyFilter ? style.applyFilter2 : style.applyFilter} onClick={() => {
          setApplyFilter(true);

        }}> {t("applyFilter")} </span>

    </div>
  )
}

export {FilterItemsHolder}