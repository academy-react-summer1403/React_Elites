import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import styleLink from "./../../LinkPage/partLinkPage/link.module.css";
import { Form, NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../../State/State";
import { useEffect, useState } from "react";


const TwoStep = ({twoStep, settwoStep}) => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>ورود دو مرحله ای</h1>
                <input checked={twoStep ? true : false} onChange={() => settwoStep(!twoStep)} className={styleInform.checkBox} type="checkbox" data-theme={darkMode ? "dark" : "lightMode"} />
            </div>
        </div>

    )
}

export { TwoStep }