import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleLocation from "./partLocationPage/location.module.css";
import {Map} from "./partLocationPage/Map";

import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../State/State";
import { useTranslation } from "react-i18next";


const LocationForm = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

    return (
        <Formik>
            {(form) => (
                <>
                    <div className={style.titleHolder}>
                        <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("myProfile")}</h1>
                    </div>
                    <div className={styleInform.page2}>
                        <div className={styleInform.rightHolder} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
                            <div className={styleInform.right} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
                                <NavLink to="/Student-Panel/Information" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("informationAccount")} </NavLink>
                                <NavLink to='/Student-Panel/Image' className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("images")} </NavLink>
                                <div><h1 className={styleLocation.selected} >{t("placeInform")} </h1></div>
                                <NavLink to='/Student-Panel/Link' className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("links")} </NavLink>
                                <NavLink to="/Student-Panel/changePassword" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("ChangePassword")} </NavLink>  
                                <NavLink to="/Student-Panel/change-security" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("UserSettings")} </NavLink> 
                            </div>
                        </div>
                        <div className={styleLocation.left}>
                            <div className={styleLocation.locationHolder}> 
                                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("MapSelect")}</h1>
                                <Map />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Formik>

    )
}

export { LocationForm }