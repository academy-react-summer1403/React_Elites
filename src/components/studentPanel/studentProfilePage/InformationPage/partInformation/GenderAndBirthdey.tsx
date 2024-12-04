import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from 'react-i18next';


const GenderAndBirthdey = ({setisMale, isMale, form}) => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');



    return (

        <>
            <div className={styleInform.genderAndBirthdey}>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("birthday")}</h1>
                    <Field name="birthDay" className={styleInform.Input} placeholder={t("enterBirthday")} data-theme={darkMode ? "dark" : "lightMode"} />
                </div>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("gender")}</h1>
                    <div className={styleInform.inputGender}>
                        <div>
                            <Field type="radio" id="manInput" name="gender" className={styleInform.GenderInput} onChange={() => {
                                setisMale(true)
                            }} />
                            <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("man")}</h1>
                        </div>
                        <div>
                            <Field type="radio" id="womanInput" name="gender" className={styleInform.GenderInput} onChange={() => {
                                setisMale(false)
                            }} />
                            <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("woman")}</h1>
                        </div>
                        <button onClick={() => {
                            if (isMale === true) {
                                form.values.gender = true;
                            }
                            else if (isMale === false) {
                                form.values.gender = false;
                            }
                        }}> {t("select")}</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export { GenderAndBirthdey }