import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleLink from "./partChangePasswordPage/changePassword.css";
import { Form, NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../State/State";
import toast, { Toaster } from "react-hot-toast";


const LinkForm = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return user && (
        <Formik>
            {(form) => (
                <Form>
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
                                <div><h1 className={styleLink.selected}>لینک ها </h1></div>
                                <NavLink to="/Student-Panel/changePassword" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تغییر رمز عبور </NavLink>        
                            </div>
                        </div>
                        <div className={styleInform.left}>
                            <div className={styleInform.email}> 
                                <div className={styleInform.bigDiv}>
                                    <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>تلگرام</h1>
                                    <Field name="telegramLink" className={styleInform.Input} placeholder="لینک تلگرام خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"}/>
                                </div>
                            </div>
                            <div className={styleInform.location}> 
                                <div className={styleInform.bigDiv}>
                                    <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>لینکدین</h1>
                                    <Field name="linkdinProfile" className={styleInform.Input} placeholder="لینک لینکدین خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>

    )
}

export { LinkForm }