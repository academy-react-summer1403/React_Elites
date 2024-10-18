import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import { NavLink } from "react-router-dom";

const StudentGhabRight = () => {

    return (
        <Formik>
            <div className={style.right}>
                <div className={style.logoBahr}> </div>
                <div className={style.bottom}>
                    <div className={style.menu}>
                        <div>
                            <div className={style.Dashboard}> </div>
                            <NavLink> داشبرد</NavLink>
                        </div>
                        <div>
                            <div className={style.MyPeriod}> </div>
                            <NavLink to='/Student-Panel-Course'> دوره من</NavLink>
                        </div>
                        <div>
                            <div className={style.MyReservation}> </div>
                            <NavLink to=''> رزرو من</NavLink>
                        </div>
                        <div>
                            <div className={style.favoritePeriod}> </div>
                            <NavLink> دوره های موردعلاقه</NavLink>
                        </div>
                        <div>
                            <div className={style.BlogMenu}> </div>
                            <NavLink> بلاگ های موردعلاقه</NavLink>
                        </div>
                        <div>
                            <div className={style.profile}> </div>
                            <NavLink to='/Information'> پروفایل</NavLink>
                        </div>
                        <div>
                            <div className={style.pay}> </div>
                            <NavLink to="/Shopping-Basket"> پرداخت ها</NavLink>
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