import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleLink from "../Change Security/Items/EditSecurity.module.css";
import { useGlobalState } from "../../../../State/State";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { EditSecurityHolder } from "./Items/EditSecurityHolder";
import { useTranslation } from "react-i18next";


const ChangeSecurity = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

    return (
            <>
                <Toaster />
                    <div className={style.titleHolder}>
                        <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("myProfile")}</h1>
                    </div>
                    <div className={styleInform.page2}>
                        <div className={styleInform.rightHolder} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
                            <div className={styleInform.right}>
                                <NavLink to="/Student-Panel/Information" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("informationAccount")} </NavLink>
                                <NavLink to="/Student-Panel/Image" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("images")} </NavLink>
                                <NavLink to="/Student-Panel/Location" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("placeInform")} </NavLink>
                                <NavLink to="/Student-Panel/Link" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("links")} </NavLink> 
                                <NavLink to="/Student-Panel/changePassword" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("ChangePassword")} </NavLink> 
                                <div><h1 className={styleLink.selected}> {t("UserSettings")} </h1></div>
                            </div>
                        </div>
                        <EditSecurityHolder />
                    </div>
            </>
    )
}

export { ChangeSecurity }