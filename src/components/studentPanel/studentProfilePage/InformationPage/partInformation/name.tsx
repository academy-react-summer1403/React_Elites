import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const Name = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');



    return (

        <>
            <div className={styleInform.name}>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={identifier("darkNoBG")}>{t("name")}</h1>
                    <Field name="fName" className={styleInform.Input} placeholder={t("enterName")} data-theme={identifier("dark")} />
                </div>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={identifier("darkNoBG")}>{t("lastName")}</h1>
                    <Field name="lName" className={styleInform.Input} placeholder={t("enterLastName")} data-theme={identifier("dark")} />
                </div>
            </div>

        </>
    )
}

export { Name }