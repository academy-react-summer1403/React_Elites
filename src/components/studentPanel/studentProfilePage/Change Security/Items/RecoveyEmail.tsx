import { Field, Formik } from "formik";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from "react-i18next";



const RecoveryEmail = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

    return (

        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("BackupEmail")} </h1>
                <Field name="recoveryEmail" className={styleInform.Input} data-theme={darkMode ? "dark" : "lightMode"} />
            </div>
        </div>

    )
}

export { RecoveryEmail }