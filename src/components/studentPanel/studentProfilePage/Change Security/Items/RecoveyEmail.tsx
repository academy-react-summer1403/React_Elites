import { Field, Formik } from "formik";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";

import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";


const RecoveryEmail = () => {
  
    const { t } = useTranslation();

    return (

        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={identifier("darkNoBG","dark2NoBG")}> {t("BackupEmail")} </h1>
                <Field name="recoveryEmail" className={styleInform.Input} data-theme={identifier("dark","dark2")} />
            </div>
        </div>

    )
}

export { RecoveryEmail }