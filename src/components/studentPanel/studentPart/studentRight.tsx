import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css"
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";
import { useTranslation } from 'react-i18next';

const StudentGhabRight = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
        <Formik>
            <div className={style.right}>
                <div className={style.logoBahr}> </div>
                <div className={style.bottom}>
                    <div className={style.menu}>
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
                            <NavLink to='/Student-Panel/Information' data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("Profile")}</NavLink>
                        </div>
                        <div>
                            <div className={style.pay}> </div>
                            <NavLink to="/Student-Panel/Shopping-Basket" data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("Payments")}</NavLink>
                        </div>
                    </div>
                    <div className={style.logout}>
                        <div className={style.exit}> </div>
                        <NavLink to='/'> {t("SignOut")}</NavLink>
                    </div>
                </div>
            </div>
        </Formik>
    )
}
export { StudentGhabRight }