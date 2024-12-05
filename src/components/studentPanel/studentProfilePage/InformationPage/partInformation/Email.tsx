import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const Email = () => {
    const { t } = useTranslation();
  



    return (

        <>
            <div className={styleInform.email}>
                <div className={styleInform.bigDiv}>
                    <h1 data-theme={identifier("darkNoBG")}>{t("email")}</h1>
                    <Field name="email" className={styleInform.Input} placeholder={t("enterEmailReg")} data-theme={identifier("dark")} />
                </div>
            </div>

        </>
    )
}

export { Email }