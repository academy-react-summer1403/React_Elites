import { Field, Formik } from "formik";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const Telegram = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

    return (
        <div className={styleInform.email}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={identifier("darkNoBG")}>{t("Telegram")}</h1>
                <Field name="telegramLink" className={styleInform.Input} placeholder={t("enterLinkTelegram")} data-theme={identifier("dark")} />
            </div>
        </div>
    )
}

export { Telegram }