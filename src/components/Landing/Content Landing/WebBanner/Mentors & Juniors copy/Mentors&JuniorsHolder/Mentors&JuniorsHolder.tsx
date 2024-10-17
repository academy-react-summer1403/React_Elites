import React from 'react'
import style from './Mentors&JuniorsHolder.module.css'
import { Juniors } from '../Mentors&JuniorsItems/Juniors'
import { Mentors } from '../Mentors&JuniorsItems/Mentors'

const MentorsAndJuniorsHolderRes = () => {
  return (
    <>
        <div className={style.container}>
          <Juniors />
          <Mentors />
        </div>
    </>
  )
}

export {MentorsAndJuniorsHolderRes};