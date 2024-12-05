import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const NumberAndCode = () => {
    const { t } = useTranslation();
  



    return (

        <>
            <div className={styleInform.numberAndCode}>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={identifier("darkNoBG")}>{t("PhoneNumberReg")}</h1>
                    <Field name="phoneNumber" className={styleInform.Input} placeholder={t("enterNumberReg")} data-theme={identifier("dark")} />
                </div>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={identifier("darkNoBG")}>{t("nationalCode")}</h1>
                    <Field name="nationalCode" className={styleInform.Input} placeholder={t("enterCodeMeli")} data-theme={identifier("dark")} />
                </div>
            </div>

        </>
    )
}

export { NumberAndCode }