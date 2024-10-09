import React from 'react'
import style from './Holder.module.css'
import { Title } from './Title'
import { Search } from '../FilterSearch/Search'
import { Category } from '../FilterCategory/Category'
import { Level } from '../FilterLevel/Level'
import { Teacher } from '../FilterTeacher/Teacher'
import { Price } from '../FilterPrice/Price'
import { Date } from '../FilterDate/Date'

const FilterItemsHolder = () => {
  return (
    <div className={style.holder}>
        <Title />
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