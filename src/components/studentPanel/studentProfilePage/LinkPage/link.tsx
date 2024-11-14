import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleLink from "./../LinkPage/partLinkPage/link.module.css";
import { Form, NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../State/State";
import { useEffect, useState } from "react";
import { putUserInfoEdit } from "../../../../core/services/api/putUserInfoEdit";
import toast, { Toaster } from "react-hot-toast";
import { getProfile } from "../../../../core/services/api/getProfileInfo";


const LinkForm = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [user, setUser] = useState()

    const updateProfileInfo = async (values) => {
        let userr = await putUserInfoEdit(values)
        if(userr.success === true){
            toast.success("عملیات با موفقیت انجام شد")
        }
    }
    const getUserInfo = async () => {
        const userInfo = await getProfile()
        setUser(userInfo)
    }
    useEffect(() => {
        getUserInfo()
    }, [])

    return user && (
        <Formik
            initialValues={{
                telegramLink: user.telegramLink,
                linkdinProfile: user.linkdinProfile
            }}
            onSubmit={(values) => updateProfileInfo(values)}
        >
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