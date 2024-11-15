import React from 'react'
import  styleLogin  from "./../Auth.module.css";
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TextWelcomeAuth = () => {
    const { t } = useTranslation();
    return (
        <div className={styleLogin.textWelcome}>
            <h1 className="text-black text-right font-DannaBold text-3xl w-full">{t("headerTitleCoursesList")}</h1>
            <h1 className="mt-2 text-base items-right text-gray-500 font-DannaDemiBold w-full text-right">{t("authDesc")}</h1>
        </div>
    )
}

export {TextWelcomeAuth}