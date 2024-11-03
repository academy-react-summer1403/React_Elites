import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./partInformation/Information.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../State/State";
import { useState } from "react";
import { putUserInfoEdit } from "../../../../core/services/api/putUserInfoEdit";


const InformationForm = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [isMale, setisMale] = useState(false)

    const updateProfileInfo = async (values) => {
        let user = await putUserInfoEdit(values)
        console.log(user)
    }

    return (
        <Formik        
        initialValues={{ LName: 'عباس زاده', FName: 'نویدرضا', UserAbout: 'سرگروه ریکت الایت', HomeAdderess: 'ساری ساری ساری ساری', NationalCode: '4990349725', Gender: false, BirthDay: '1/1/2010',LinkdinProfile: 'https://linkedin.com', TelegramLink: 'https://t.me', ReceiveMessageEvent: false, Latitude: '0', Longitude: '0' }}
        onSubmit={(values) => updateProfileInfo(values)}
        >
            {(form) => (
                <>
                    <div className={style.titleHolder}>
                        <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>پروفایل من</h1>
                    </div>
                <div className={styleInform.page2}>
                <div className={styleInform.rightHolder} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
                    <div className={styleInform.right}>
                        <div><h1 className={styleInform.selected}>اطلاعات حساب کاربری </h1></div>
                        <NavLink to="/Student-Panel/Image" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>عکس ها </NavLink>
                        <NavLink to="/Student-Panel/Location"  className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>محل سکونت </NavLink>
                        <NavLink to="/Student-Panel/Link"  className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>لینک ها </NavLink>
                    </div>
                </div>
                <div className={styleInform.left}>
                    <div className={styleInform.name}>
                        <div className={styleInform.smallDiv}>
                            <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>نام</h1>
                            <Field name="Fame" className={styleInform.Input} placeholder="نام خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"}/>
                        </div>
                        <div className={styleInform.smallDiv}>
                            <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>نام خانوادگی</h1>
                            <Field name="LName" className={styleInform.Input} placeholder="نام خانوادگی خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"}/>
                        </div>
                    </div>
                    <div className={styleInform.aboutMe}>
                        <div className={styleInform.bigDiv}>
                            <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>درباره من</h1>
                            <Field name="UserAbout" className={styleInform.Input} placeholder="متن درباره خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"}/>
                        </div>
                    </div>
                    <div className={styleInform.numberAndCode}>
                        <div className={styleInform.smallDiv}>
                            <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>شماره همراه</h1>
                            <input className={styleInform.Input} placeholder="شماره همراه خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"}/>
                        </div>
                        <div className={styleInform.smallDiv}>
                            <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>کد ملی</h1>
                            <Field name="NationalCode" className={styleInform.Input} placeholder="کد ملی خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"}/>
                        </div>
                    </div>
                    <div className={styleInform.genderAndBirthdey}>
                        <div className={styleInform.smallDiv}>
                            <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ تولد</h1>
                            <Field name="BirthDay" className={styleInform.Input} placeholder="تاریخ تولد خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"}/>
                        </div>
                        <div className={styleInform.smallDiv}>
                            <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>جنسیت</h1>
                            <div className={styleInform.inputGender}>
                                <div>
                                    <Field type="radio" id="manInput" name="gender" className={styleInform.Input} onChange={() => {
                                        setisMale(true)
                                    }} />
                                    <label htmlFor="manInput" data-theme={darkMode ? "darkNoBG" : "lightMode"}> مرد</label>
                                </div>
                                <div>
                                    <Field type="radio" id="womanInput" name="gender" className={styleInform.Input} onChange={() => {
                                        setisMale(false)
                                    }}/>
                                    <label htmlFor="manInput" data-theme={darkMode ? "darkNoBG" : "lightMode"}> زن</label>
                                </div>
                                <button onClick={() => {
                                    if(isMale === true){
                                        form.values.Gender = true;
                                    }
                                    else if(isMale === false){
                                        form.values.Gender = false;
                                    }
                                }}> انتخاب کنید</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleInform.email}> 
                        <div className={styleInform.bigDiv}>
                            <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>ایمیل</h1>
                            <input className={styleInform.Input} placeholder="ایمیل خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"}/>
                        </div>
                    </div>
                    <div className={styleInform.location}> 
                        <div className={styleInform.bigDiv}>
                            <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>آدرس سکونت</h1>
                            <Field name="HomeAdderess" className={styleInform.Input} placeholder="آدرس محل سکونت خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"}/>
                        </div>
                    </div>
                    <button type="submit">اعمال تغییرات</button>
                </div>
            </div>
        </>
            )}
    </Formik>
)}

export { InformationForm }