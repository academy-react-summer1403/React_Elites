import React from 'react'
import style from './Text.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const Text = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.text}  data-theme={darkMode ? "dark" : "light"}>{t("StartNowBanner1")} <br /> {t("BestTeacherBanner")}</div>
  )
}

export {Text}