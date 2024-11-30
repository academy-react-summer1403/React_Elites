import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import styleLink from "./../../LinkPage/partLinkPage/link.module.css";
import { Form, NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../../State/State";
import { useEffect, useState } from "react";


const NewPassword = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (

        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>رمز عبور جدید</h1>
                <Field name="newPassword" className={styleInform.Input} placeholder="رمز عبور جدید خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"} />
            </div>
        </div>

    )
}

export { NewPassword }