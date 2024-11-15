import React from 'react'
import style from './Holder.module.css'
import { Title } from './Title'
import { Search } from '../FilterSearch/Search'
import { Category } from '../FilterCategory/Category'
import { Level } from '../FilterLevel/Level'
import { Teacher } from '../FilterTeacher/Teacher'
import { Price } from '../FilterPrice/Price'
import { Date } from '../FilterDate/Date'
import { useTranslation } from 'react-i18next';

const FilterItemsHolder = (props) => {
  const { t } = useTranslation();
  return (
    <div className={style.holder}>
      <div className={style.holderTitle}>
      <Title />
        <div className={style.closeBtn} onClick={() => {
          props.setClicked(false)
        }}> {t("close")} </div>
      </div>
        <Search />
        <Category />
        <Level />
        <Teacher />
        <Price />
        <Date />
    </div>
  )
}

export {FilterItemsHolder}