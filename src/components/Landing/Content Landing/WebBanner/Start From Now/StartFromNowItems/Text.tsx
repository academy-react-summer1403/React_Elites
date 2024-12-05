import React from 'react'
import style from './Text.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Text = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.text}  data-theme={identifier("dark")}>{t("StartNowBanner1")} <br /> {t("StartNowBanner2")}</div>
  )
}

export {Text}