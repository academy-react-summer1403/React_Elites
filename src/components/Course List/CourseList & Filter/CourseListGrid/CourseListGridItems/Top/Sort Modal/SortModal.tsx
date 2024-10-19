import React from 'react'
import style from './Top.module.css'
import { TopItems } from './TopItems'

const SortModal = ({setSortModal}) => {
  return (
    <div className={style.container}>
      <TopItems setSortModal={setSortModal} />
    </div>
  )
}

export {SortModal}