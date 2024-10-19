import React, { useState } from 'react'
import style from './Top.module.css'
import { TopItems } from './TopItems'

const TopHolder = ({clicked, setClicked, sortModal, setSortModal}) => {

  return (
    <div className={style.holder}>
      <div className={style.title} >ترتیب </div>
      <TopItems clicked={clicked} setClicked={setClicked} sortModal={sortModal} setSortModal={setSortModal} />
    </div>
  )
}

export {TopHolder}