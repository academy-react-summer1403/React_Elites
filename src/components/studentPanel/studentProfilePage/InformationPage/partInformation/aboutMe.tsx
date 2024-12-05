import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const AboutMe = () => {
    const { t } = useTranslation();
  



    return (

        <>
            <div className={styleInform.aboutMe}>
                <div className={styleInform.bigDiv}>
                    <h1 data-theme={identifier("darkNoBG")}>{t("aboutMe")}</h1>
                    <Field name="userAbout" className={styleInform.Input} placeholder={t("enterYourDesc")} data-theme={identifier("dark")} />
                </div>
            </div>

        </>
    )
}

export { AboutMe }