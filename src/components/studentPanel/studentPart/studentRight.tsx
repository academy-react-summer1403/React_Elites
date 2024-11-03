import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css"
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";

const StudentGhabRight = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
        <Formik>
            <div className={style.right}>
                <div className={style.logoBahr}> </div>
                <div className={style.bottom}>
                    <div className={style.menu}>
                        <div>
                            <div className={style.Dashboard}> </div>
                            <NavLink data-theme={darkMode ? "darkNoBG" : "lightMode"}> داشبرد</NavLink>
                        </div>
                        <div>
                            <div className={style.MyPeriod}> </div>
                            <NavLink to='/Student-Panel/My-Courses' data-theme={darkMode ? "darkNoBG" : "lightMode"}> دوره من</NavLink>
                        </div>
                        <div>
                            <div className={style.MyReservation}> </div>
                            <NavLink to='/Student-Panel/My-Reserve' data-theme={darkMode ? "darkNoBG" : "lightMode"}> رزرو من</NavLink>
                        </div>
                        <div>
                            <div className={style.favoritePeriod}> </div>
                            <NavLink to="/Student-Panel/Fav-Courses" data-theme={darkMode ? "darkNoBG" : "lightMode"}> دوره های موردعلاقه</NavLink>
                        </div>
                        <div>
                            <div className={style.BlogMenu}> </div>
                            <NavLink to="/Student-Panel/Fav-Blogs" data-theme={darkMode ? "darkNoBG" : "lightMode"}> بلاگ های موردعلاقه</NavLink>
                        </div>
                        <div>
                            <div className={style.profile}> </div>
                            <NavLink to='/Student-Panel/Information' data-theme={darkMode ? "darkNoBG" : "lightMode"}> پروفایل</NavLink>
                        </div>
                        <div>
                            <div className={style.pay}> </div>
                            <NavLink to="/Student-Panel/Shopping-Basket" data-theme={darkMode ? "darkNoBG" : "lightMode"}> پرداخت ها</NavLink>
                        </div>
                    </div>
                    <div className={style.logout}>
                        <div className={style.exit}> </div>
                        <NavLink to='/'> خروج از حساب کاربری</NavLink>
                    </div>
                </div>
            </div>
        </Formik>
    )
}
export { StudentGhabRight }