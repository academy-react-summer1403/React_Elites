import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleLocation from "./partLocationPage/location.module.css";

import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../State/State";


const LocationForm = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
        <Formik>
            {(form) => (
                <>
                    <div className={style.titleHolder}>
                        <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>پروفایل من</h1>
                    </div>
                    <div className={styleInform.page2}>
                        <div className={styleInform.rightHolder} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
                            <div className={styleInform.right} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
                                <NavLink to="/Student-Panel/Information" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>اطلاعات حساب کاربری </NavLink>
                                <NavLink to='/Student-Panel/Image' className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>عکس ها </NavLink>
                                <div><h1 className={styleLocation.selected} >محل سکونت </h1></div>
                                <NavLink to='/Student-Panel/Link' className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>لینک ها </NavLink>
                            </div>
                        </div>
                        <div className={styleLocation.left}>
                            <div className={styleLocation.locationHolder}> 
                                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید</h1>
                                <div className={styleLocation.location}></div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Formik>

    )
}

export { LocationForm }