import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const Name = () => {
    const { t } = useTranslation();
  



    return (

        <>
            <div className={styleInform.name}>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={identifier("darkNoBG","dark2NoBG")}>{t("name")}</h1>
                    <Field name="fName" className={styleInform.Input} placeholder={t("enterName")} data-theme={identifier("dark","dark2")} />
                </div>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={identifier("darkNoBG","dark2NoBG")}>{t("lastName")}</h1>
                    <Field name="lName" className={styleInform.Input} placeholder={t("enterLastName")} data-theme={identifier("dark","dark2")} />
                </div>
            </div>

        </>
    )
}

export { Name }