import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./partInformation/Information.module.css";
import { StudentGhabRight } from "../../studentPart/studentRight";
import { StudentGhabLeft } from "../../studentPart/studentLeft";
import { NavLink } from "react-router-dom";


const InformationForm = () => {

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
                                        <div><h1 className={style.selected}>اطلاعات حساب کاربری </h1></div>
                                        <NavLink to="/Image" className={styleInform.pages}>عکس ها </NavLink>
                                        <NavLink to="/Location"  className={styleInform.pages}>محل سکونت </NavLink>
                                        <NavLink to="/Link"  className={styleInform.pages}>لینک ها </NavLink>
                                    </div>
                                </div>
                                <div className={styleInform.left}>
                                    <div className={styleInform.name}>
                                        <div className={styleInform.smallDiv}>
                                            <h1>نام</h1>
                                            <Field className={styleInform.Input} placeholder="نام خود را وارد کنید" />
                                        </div>
                                        <div className={styleInform.smallDiv}>
                                            <h1>نام خانوادگی</h1>
                                            <Field className={styleInform.Input} placeholder="نام خانوادگی خود را وارد کنید" />
                                        </div>
                                    </div>
                                    <div className={styleInform.aboutMe}>
                                        <div className={styleInform.bigDiv}>
                                            <h1>درباره من</h1>
                                            <Field className={styleInform.Input} placeholder="متن درباره خود را وارد کنید" />
                                        </div>
                                    </div>
                                    <div className={styleInform.numberAndCode}>
                                        <div className={styleInform.smallDiv}>
                                            <h1>شماره همراه</h1>
                                            <Field className={styleInform.Input} placeholder="شماره همراه خود را وارد کنید" />
                                        </div>
                                        <div className={styleInform.smallDiv}>
                                            <h1>کد ملی</h1>
                                            <Field className={styleInform.Input} placeholder="کد ملی خود را وارد کنید" />
                                        </div>
                                    </div>
                                    <div className={styleInform.genderAndBirthdey}>
                                        <div className={styleInform.smallDiv}>
                                            <h1>تاریخ تولد</h1>
                                            <Field className={styleInform.Input} placeholder="تاریخ تولد خود را وارد کنید" />
                                        </div>
                                        <div className={styleInform.smallDiv}>
                                            <h1>جنسیت</h1>
                                            <div className={styleInform.inputGender}>
                                                <div>
                                                    <Field type="radio" id="manInput" name="gender" className={styleInform.Input} />
                                                    <label htmlFor="manInput"> مرد</label>
                                                </div>
                                                <div>
                                                    <Field type="radio" id="womanInput" name="gender" className={styleInform.Input} />
                                                    <label htmlFor="manInput"> زن</label>
                                                </div>
                                                <button> انتخاب کنید</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styleInform.email}> 
                                        <div className={styleInform.bigDiv}>
                                            <h1>ایمیل</h1>
                                            <Field className={styleInform.Input} placeholder="ایمیل خود را وارد کنید" />
                                        </div>
                                    </div>
                                    <div className={styleInform.location}> 
                                        <div className={styleInform.bigDiv}>
                                            <h1>آدرس سکونت</h1>
                                            <Field className={styleInform.Input} placeholder="آدرس محل سکونت خود را وارد کنید" />
                                        </div>
                                    </div>
                                    <button>اعمال تغییرات</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Formik>

    )
}

export { InformationForm }