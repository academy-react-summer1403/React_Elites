import { Field, Formik } from "formik";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from "react-i18next";


const Linkedin = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

    return (
        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("Linkedin")}</h1>
                <Field name="linkdinProfile" className={styleInform.Input} placeholder={t("enterLinkLinkedin")} data-theme={darkMode ? "dark" : "lightMode"} />
            </div>
        </div>
    )
}

export { Linkedin }