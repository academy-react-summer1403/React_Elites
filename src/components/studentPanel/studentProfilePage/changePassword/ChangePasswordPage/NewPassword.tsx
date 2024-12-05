import { ErrorMessage, Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import styleLink from "./../../LinkPage/partLinkPage/link.module.css";
import { Form, NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../../State/State";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const NewPassword = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

    return (

        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("NewPassword")}</h1>
                <Field name="newPassword" className={styleInform.Input} placeholder={t("enterNewPassword")} data-theme={darkMode ? "dark" : "lightMode"} />
                <ErrorMessage name="newPassword" component={"p"} className="error" />
            </div>
        </div>

    )
}

export { NewPassword }