import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css";

const StudentGhabRight = () => {

    return (
        <Formik>
            <div className={style.right}>
                <div className={style.logoBahr}> </div>
                <div className={style.bottom}>
                    <div className={style.menu}>
                        <div>
                            <div className={style.Dashboard}> </div>
                            <h1> داشبرد</h1>
                        </div>
                        <div>
                            <div className={style.MyPeriod}> </div>
                            <h1> دوره من</h1>
                        </div>
                        <div>
                            <div className={style.MyReservation}> </div>
                            <h1> رزرو من</h1>
                        </div>
                        <div>
                            <div className={style.favoritePeriod}> </div>
                            <h1> دوره های موردعلاقه</h1>
                        </div>
                        <div>
                            <div className={style.BlogMenu}> </div>
                            <h1> بلاگ های موردعلاقه</h1>
                        </div>
                        <div>
                            <div className={style.profile}> </div>
                            <h1> پروفایل</h1>
                        </div>
                        <div>
                            <div className={style.pay}> </div>
                            <h1> پرداخت ها</h1>
                        </div>
                    </div>
                    <div className={style.logout}>
                        <div className={style.exit}> </div>
                        <h1> خروج از حساب کاربری</h1>
                    </div>
                </div>
            </div>
        </Formik>
    )
}
export { StudentGhabRight }