import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import styleLink from "./../../LinkPage/partLinkPage/link.module.css";
import { Form, NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../../State/State";
import { useEffect, useState } from "react";


const Telegram = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
    <div className={styleInform.left}>
        <div className={styleInform.email}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>تلگرام</h1>
                <Field name="telegramLink" className={styleInform.Input} placeholder="لینک تلگرام خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"} />
            </div>
        </div>
        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>لینکدین</h1>
                <Field name="linkdinProfile" className={styleInform.Input} placeholder="لینک لینکدین خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"} />
            </div>
        </div>
    </div>

    )
}

export { Telegram }