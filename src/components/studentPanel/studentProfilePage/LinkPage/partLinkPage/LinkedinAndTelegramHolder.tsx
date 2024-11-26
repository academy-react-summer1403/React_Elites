import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import styleLink from "./../../LinkPage/partLinkPage/link.module.css";
import { Form, NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../../State/State";
import { useEffect, useState } from "react";
import { Telegram } from "./telegram";
import { Linkedin } from "./linkedin";

const LinksHolder = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
    <div className={styleInform.left}>
        <Linkedin />
        <Telegram />
    </div>

    )
}

export { LinksHolder }