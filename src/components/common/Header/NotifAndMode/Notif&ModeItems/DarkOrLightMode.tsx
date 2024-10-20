import React, { useState } from 'react'
import style from '../../../../../Style/DarkOrLightMode.module.css'

const DarkOrLightMode = () => {

  return (
    <>
        <input type='checkbox' id="check" className={style.inputToggle}/>
        <label htmlFor='check' className={style.DarkOrLight}></label>
    </>
  )
}

export {DarkOrLightMode}