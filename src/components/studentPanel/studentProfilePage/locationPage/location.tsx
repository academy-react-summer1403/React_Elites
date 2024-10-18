import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleLocation from "./partLocationPage/location.module.css";
import { StudentGhabRight } from "../../studentPart/studentRight";
import { StudentGhabLeft } from "../../studentPart/studentLeft";
import { NavLink } from "react-router-dom";


const LocationForm = () => {

    return (

        <Formik>
            {(form) => (
                <div className={style.root}>
                    <StudentGhabRight />
                    <div className={style.left}>
                        <StudentGhabLeft />
                        <div className={style.page}>
                            <div className={style.titleHolder}>
                                <h1 className={style.title}>پروفایل من</h1>
                            </div>
                            <div className={styleInform.page2}>

                                <div className={styleInform.rightHolder}>
                                    <div className={styleInform.right}>
                                        <h1>اطلاعات حساب کاربری </h1>
                                        <NavLink to='/Image'>عکس ها </NavLink>
                                        <div><NavLink to='/Location' className={styleLocation.selected}>محل سکونت </NavLink></div>
                                        <NavLink to='/Link'>لینک ها </NavLink>
                                    </div>
                                </div>
                                <div className={styleLocation.left}>
                                    <div className={styleLocation.locationHolder}> 
                                        <h1>داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید</h1>
                                        <div className={styleLocation.location}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Formik>

    )
}

export { LocationForm }