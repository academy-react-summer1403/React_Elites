import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from 'react-i18next';


const Email = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');



    return (

        <>
            <div className={styleInform.email}>
                <div className={styleInform.bigDiv}>
                    <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("email")}</h1>
                    <Field name="email" className={styleInform.Input} placeholder="ایمیل خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"} />
                </div>
            </div>

        </>
    )
}

export { Email }