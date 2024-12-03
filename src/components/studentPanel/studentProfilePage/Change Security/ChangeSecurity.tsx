import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleLink from "../Change Security/Items/EditSecurity.module.css";
import { useGlobalState } from "../../../../State/State";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { EditSecurityHolder } from "./Items/EditSecurityHolder";


const ChangeSecurity = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
            <>
                <Toaster />
                    <div className={style.titleHolder}>
                        <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>پروفایل من</h1>
                    </div>
                    <div className={styleInform.page2}>
                        <div className={styleInform.rightHolder} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
                            <div className={styleInform.right}>
                                <NavLink to="/Student-Panel/Information" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>اطلاعات حساب کاربری </NavLink>
                                <NavLink to="/Student-Panel/Image" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>عکس ها </NavLink>
                                <NavLink to="/Student-Panel/Location" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>محل سکونت </NavLink>
                                <NavLink to="/Student-Panel/Link" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>لینک ها </NavLink> 
                                <NavLink to="/Student-Panel/changePassword" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تغییر رمز عبور </NavLink> 
                                <div><h1 className={styleLink.selected}> تنظیمات کاربری </h1></div>
                            </div>
                        </div>
                        <EditSecurityHolder />
                    </div>
            </>
    )
}

export { ChangeSecurity }