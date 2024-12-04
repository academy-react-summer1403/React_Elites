import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import { NavLink } from "react-router-dom";
import { DarkOrLightMode } from "./DarkOrLightMode";
import { useGlobalState } from "../../../State/State";
import profile from "../../../assets/Images/userName.png"
import { getProfile } from "../../../core/services/api/getProfileInfo";
import { useEffect, useState } from "react";
import { removeItem } from "../../../core/services/storage/storage.services";
import { useTranslation } from "react-i18next";

const StudentGhabLeft = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();
    const [user, setUser] = useState([])
    const [isLogin, setIsLogin] = useGlobalState('isLogin');
    const getUserInfo = async () => {
        const userInfo = await getProfile();
        setUser(userInfo)
    }
    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <Formik>
            <div className={style.header}>
                <div className={style.accountHolder}>
                    <input id="hamburgerMenu" type="checkBox" className={style.checkBox} />
                    <label htmlFor="hamburgerMenu" className={style.hamburgerMenu}>
                        <div className={style.right2}>
                            <div className={style.close}></div>
                            <div className={style.logoBahr}> </div>
                            <div className={style.bottom}>
                                <div className={style.menu}>
                                    <div>
                                        <div className={style.home}> </div>
                                        <NavLink to='/' data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("MainPage")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.Dashboard}> </div>
                                        <NavLink to='/Student-Panel/dashboard' data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("Dashboard")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.MyPeriod}> </div>
                                        <NavLink to='/Student-Panel/My-Courses' data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("myCourse")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.MyReservation}> </div>
                                        <NavLink to='/Student-Panel/My-Reserve' data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("MyReservation")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.favoritePeriod}> </div>
                                        <NavLink to="/Student-Panel/Fav-Courses" data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("FavoriteCourses")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.BlogMenu}> </div>
                                        <NavLink to="/Student-Panel/Fav-Blogs" data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("FavoriteBlogs")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.profile}> </div>
                                        <NavLink to='/Information' data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("Profile")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.pay}> </div>
                                        <NavLink to="/Shopping-Basket" data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("Payments")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.report}> </div>
                                        <NavLink to='/' data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("Report")} </NavLink>
                                    </div>
                                    <div>
                                        <div className={style.communicate}> </div>
                                        <NavLink to='/' data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("contactUs")} </NavLink>
                                    </div>
                                    <div className={style.logout}>
                                        <div className={style.exit}> </div>
                                        <NavLink to="/" className="DannaM" onClick={() => {
                                            removeItem("token")
                                            setIsLogin(false)
                                        }}> {t("SignOut")}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                    <img src={user.currentPictureAddress} className={style.userProfile} />
                    <div className={style.userHolder}>
                        <p className={style.userName} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{user.fName} {user.lName}</p>
                        <p className={style.userLevel} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("collegian")} </p>
                    </div>
                </div>
                <div className={style.navigate}>
                    <NavLink to="/" className={style.titleHeader} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("MainPage")} </NavLink>
                    <p className={style.titleHeader} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("Report")} </p>
                    <p className={style.titleHeader} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("contactUs")}</p>
                </div>
                <div className={style.notifAndDarkHolder}>
                    <div className={style.notif}>
                        <span>2</span>
                    </div>
                    <DarkOrLightMode />
                </div>
            </div>
        </Formik>
    )
}
export { StudentGhabLeft }