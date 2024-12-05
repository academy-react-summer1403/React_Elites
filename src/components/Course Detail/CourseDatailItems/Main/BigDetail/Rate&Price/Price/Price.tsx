import React from 'react'
import style from './Price.module.css'

import { useTranslation } from 'react-i18next';
import { ClipLoader } from 'react-spinners';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Price = ({price, isLoading}) => {

  const {t} = useTranslation();
  return (
    <div className={style.price}>
        <div className={style.toman} data-theme={identifier("darkNoBG","dark2NoBG")}>{t("toman")}</div>
        {isLoading ? <ClipLoader /> : <div className={style.number} data-theme={identifier("darkNoBG","dark2NoBG")}>{price}</div>}

    </div>
  )
}

export {Price}