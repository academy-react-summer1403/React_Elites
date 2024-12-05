import React from 'react'
import style from '../../../Style/aboutWe.module.css'
import { useGlobalState } from '../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const AboutUsTitleHeader = (props) => {
  const { t } = useTranslation();
  return (
    <h1 className={style.title} data-theme={identifier("darkNoBG")}>{t("aboutUsTitle1")} </h1>
  )
}

export {AboutUsTitleHeader}