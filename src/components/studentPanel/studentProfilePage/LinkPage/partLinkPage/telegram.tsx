import { Field, Formik } from "formik";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";

import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const Telegram = () => {
  
    const { t } = useTranslation();

    return (
        <div className={styleInform.email}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={identifier("darkNoBG","dark2NoBG")}>{t("Telegram")}</h1>
                <Field name="telegramLink" className={styleInform.Input} placeholder={t("enterLinkTelegram")} data-theme={identifier("dark","dark2")} />
            </div>
        </div>
    )
}

export { Telegram }