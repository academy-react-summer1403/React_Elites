import React from 'react'
import style from './Title.module.css'

import { BeatLoader } from 'react-spinners';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';

const Title = ({title, isLoading}) => {

  return (
    <>
    {isLoading ? <BeatLoader /> : <div className={style.title} data-theme={identifier("dark")}>{title}</div>}
    </>
  )
}

export {Title}