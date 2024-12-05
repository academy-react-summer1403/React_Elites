import React from 'react'
import style from './OurGoalsTitle.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const OurGoalsTitle = () => {
    const {t} = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    return (
        <div className={style.holderTitle}>
            <div className={style.title}  data-theme={identifier("dark")}>{t("ourGoalsLandingTitle")}</div>
        </div>

    )
}

export {OurGoalsTitle}