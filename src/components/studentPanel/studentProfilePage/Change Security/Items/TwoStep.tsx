import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import styleLink from "./../../LinkPage/partLinkPage/link.module.css";
import { Form, NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../../State/State";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const TwoStep = ({twoStep, settwoStep}) => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

    return (
        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={identifier("darkNoBG")}>{t("Two-stepLogin")}</h1>
                <input checked={twoStep ? true : false} onChange={() => settwoStep(!twoStep)} className={styleInform.checkBox} type="checkbox" data-theme={identifier("dark")} />
            </div>
        </div>

    )
}

export { TwoStep }