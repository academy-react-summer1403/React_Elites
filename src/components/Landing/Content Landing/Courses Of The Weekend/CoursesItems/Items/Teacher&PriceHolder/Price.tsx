import React from 'react'
import style from './style.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Price = ({price}) => {

  const {t} = useTranslation();
  return (
    <div className={style.holderP}>
      <div className={style.tooman} data-theme={identifier("darkNoBG")}>{t("toman")}  </div>
      <div className={style.price} data-theme={identifier("dark")}> {price}</div>
    </div>
  )
}

export {Price}