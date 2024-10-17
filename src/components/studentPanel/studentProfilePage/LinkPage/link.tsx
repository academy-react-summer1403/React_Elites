import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleLink from "./../LinkPage/partLinkPage/link.module.css";
import { StudentGhabRight } from "../../studentPart/studentRight";
import { StudentGhabLeft } from "../../studentPart/studentLeft";


const LinkForm = () => {

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
                                        <h1>عکس ها </h1>
                                        <h1>محل سکونت </h1>
                                        <div><h1 className={styleLink.selected}>لینک ها </h1></div>
                                    </div>
                                </div>
                                <div className={styleInform.left}>
                                    <div className={styleInform.email}> 
                                        <div className={styleInform.bigDiv}>
                                            <h1>تلگرام</h1>
                                            <Field className={styleInform.Input} placeholder="لینک تلگرام خود را وارد کنید" />
                                        </div>
                                    </div>
                                    <div className={styleInform.location}> 
                                        <div className={styleInform.bigDiv}>
                                            <h1>لینکدین</h1>
                                            <Field className={styleInform.Input} placeholder="لینک لینکدین خود را وارد کنید" />
                                        </div>
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

export { LinkForm }