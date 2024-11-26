import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from 'react-i18next';


const Location = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');



    return (

        <>
            <div className={styleInform.location}>
                <div className={styleInform.bigDiv}>
                    <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("addressInform")}</h1>
                    <Field name="homeAdderess" className={styleInform.Input} placeholder="آدرس محل سکونت خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"} />
                </div>
            </div>

        </>
    )
}

export { Location }