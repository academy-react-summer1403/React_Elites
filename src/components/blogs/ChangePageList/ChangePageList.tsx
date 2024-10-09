import React from 'react'
import style from '../../../Style/blogList.module.css'

const ChangePageList = (props) => {
  return (
    <div className={style.ChangePageList}>
        <span>&gt;</span>
        <span className={style.selected}>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>&lt;</span>
    </div>
  )
}

export {ChangePageList}