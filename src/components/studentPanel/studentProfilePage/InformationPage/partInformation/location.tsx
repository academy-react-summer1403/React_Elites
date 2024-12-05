import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const Location = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');



    return (

        <>
            <div className={styleInform.location}>
                <div className={styleInform.bigDiv}>
                    <h1 data-theme={identifier("darkNoBG")}>{t("addressInform")}</h1>
                    <Field name="homeAdderess" className={styleInform.Input} placeholder={t("enterAddress")} data-theme={identifier("dark")} />
                </div>
            </div>

        </>
    )
}

export { Location }