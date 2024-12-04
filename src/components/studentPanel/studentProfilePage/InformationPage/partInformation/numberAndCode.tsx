import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from 'react-i18next';


const NumberAndCode = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');



    return (

        <>
            <div className={styleInform.numberAndCode}>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("PhoneNumberReg")}</h1>
                    <Field name="phoneNumber" className={styleInform.Input} placeholder={t("enterNumberReg")} data-theme={darkMode ? "dark" : "lightMode"} />
                </div>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("nationalCode")}</h1>
                    <Field name="nationalCode" className={styleInform.Input} placeholder={t("enterCodeMeli")} data-theme={darkMode ? "dark" : "lightMode"} />
                </div>
            </div>

        </>
    )
}

export { NumberAndCode }