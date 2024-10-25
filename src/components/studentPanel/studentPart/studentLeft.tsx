import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import { NavLink } from "react-router-dom";
import { DarkOrLightMode } from "./DarkOrLightMode";
import { useGlobalState } from "../../../State/State";
import profile from "../../../assets/Images/userName.png"

const StudentGhabLeft = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

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
                                        <NavLink to='/' data-theme={darkMode ? "darkNoBG" : "lightMode"}> صفحه اصلی</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.Dashboard}> </div>
                                        <NavLink data-theme={darkMode ? "darkNoBG" : "lightMode"}> داشبرد</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.MyPeriod}> </div>
                                        <NavLink to='/Student-Panel-Course' data-theme={darkMode ? "darkNoBG" : "lightMode"}> دوره من</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.MyReservation}> </div>
                                        <NavLink to='' data-theme={darkMode ? "darkNoBG" : "lightMode"}> رزرو من</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.favoritePeriod}> </div>
                                        <NavLink data-theme={darkMode ? "darkNoBG" : "lightMode"}> دوره های موردعلاقه</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.BlogMenu}> </div>
                                        <NavLink data-theme={darkMode ? "darkNoBG" : "lightMode"}> بلاگ های موردعلاقه</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.profile}> </div>
                                        <NavLink to='/Information' data-theme={darkMode ? "darkNoBG" : "lightMode"}> پروفایل</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.pay}> </div>
                                        <NavLink to="/Shopping-Basket" data-theme={darkMode ? "darkNoBG" : "lightMode"}> پرداخت ها</NavLink>
                                    </div>
                                    <div>
                                    <div className={style.report}> </div>
                                    <NavLink to='/' data-theme={darkMode ? "darkNoBG" : "lightMode"}> گزارش </NavLink>
                                    </div>
                                    <div>
                                        <div className={style.communicate}> </div>
                                        <NavLink to='/' data-theme={darkMode ? "darkNoBG" : "lightMode"}> ارتباط با ما </NavLink>
                                    </div>
                                    <div className={style.logout}>
                                        <div className={style.exit}> </div>
                                        <NavLink to='/'> خروج از حساب کاربری</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                    <img src={profile} className={style.userProfile} />
                    <div className={style.userHolder}>
                      <p className={style.userName} data-theme={darkMode ? "darkNoBG" : "lightMode"}> پارسا آقایی</p>
                      <p className={style.userLevel} data-theme={darkMode ? "darkNoBG" : "lightMode"}> دانشجو</p>
                    </div>
                  </div>
                  <div className={style.navigate}> 
                    <NavLink to="/" className={style.titleHeader} data-theme={darkMode ? "darkNoBG" : "lightMode"}>صفحه اصلی </NavLink>
                    <p className={style.titleHeader} data-theme={darkMode ? "darkNoBG" : "lightMode"}>گزارش </p>
                    <p className={style.titleHeader} data-theme={darkMode ? "darkNoBG" : "lightMode"}> ارتباط باما</p>
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