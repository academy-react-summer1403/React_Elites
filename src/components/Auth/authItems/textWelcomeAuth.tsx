import React from 'react'
import  styleLogin  from "./../Auth.module.css";
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGlobalState } from '../../../State/State';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const TextWelcomeAuth = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    return (
        <div className={styleLogin.textWelcome}>
            <h1 data-theme={identifier("darkNoBG")} className="text-black text-right font-DannaBold text-3xl w-full">{t("headerTitleCoursesList")}</h1>
            <h1 data-theme={identifier("darkNoBGDisc")} className="mt-2 text-base items-right font-DannaDemiBold w-full text-right">{t("authDesc")}</h1>
        </div>
    )
}

export {TextWelcomeAuth}