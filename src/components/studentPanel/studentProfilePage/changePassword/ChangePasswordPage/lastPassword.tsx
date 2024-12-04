import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import styleLink from "./../../LinkPage/partLinkPage/link.module.css";
import { Form, NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../../State/State";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const LastPassword = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

    return (
        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("CurrentPassword")}</h1>
                <Field name="oldPassword" className={styleInform.Input} placeholder={t("enterCurrentPassword")} data-theme={darkMode ? "dark" : "lightMode"} />
            </div>
        </div>

    )
}

export { LastPassword }