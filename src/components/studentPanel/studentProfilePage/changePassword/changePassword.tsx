import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleLink from "./ChangePasswordPage/link.module.css";
import { Form, NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../State/State";
import { useEffect, useState } from "react";
import { putUserInfoEdit } from "../../../../core/services/api/putUserInfoEdit";
import toast, { Toaster } from "react-hot-toast";
import { getProfile } from "../../../../core/services/api/getProfileInfo";
import { LinksHolder } from "./ChangePasswordPage/LastAndNewPassword";


const ChangePassword = () => {
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
                                <div><h1 className={styleLink.selected}>تغییر رمز عبور </h1></div>
                                <NavLink to="/Student-Panel/change-security" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}> تنظیمات کاربری </NavLink> 
                            </div>
                        </div>
                        <LinksHolder />
                    </div>
            </>
    )
}

export { ChangePassword }