import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import { NavLink } from "react-router-dom";

const StudentGhabLeft = () => {

    return (
        <Formik>
            <div className={style.header}> 
                  <div className={style.accountHolder}> 
                    <p className={style.userName}> پارسا آقایی</p>
                    <p className={style.userLevel}> دانشجو</p>
                  </div>
                  <div className={style.navigate}> 
                    <NavLink to="/" className={style.titleHeader}>صفحه اصلی </NavLink>
                    <p className={style.titleHeader}>گزارش </p>
                    <p className={style.titleHeader}> ارتباط باما</p>
                  </div>
                  <div className={style.notifAndDarkHolder}> 
                      <div className={style.notif}> 
                        <span>2</span>
                      </div>
                      <div className={style.dark}> </div>
                  </div>
                </div>
        </Formik>
    )
}
export { StudentGhabLeft }