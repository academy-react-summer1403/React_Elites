import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from 'react-i18next';


const AboutMe = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');



    return (

        <>
            <div className={styleInform.aboutMe}>
                <div className={styleInform.bigDiv}>
                    <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("aboutMe")}</h1>
                    <Field name="userAbout" className={styleInform.Input} placeholder={t("enterYourDesc")} data-theme={darkMode ? "dark" : "lightMode"} />
                </div>
            </div>

        </>
    )
}

export { AboutMe }