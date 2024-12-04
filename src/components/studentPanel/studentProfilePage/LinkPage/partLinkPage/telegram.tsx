import { Field, Formik } from "formik";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from "react-i18next";


const Telegram = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

    return (
        <div className={styleInform.email}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("Telegram")}</h1>
                <Field name="telegramLink" className={styleInform.Input} placeholder={t("enterLinkTelegram")} data-theme={darkMode ? "dark" : "lightMode"} />
            </div>
        </div>
    )
}

export { Telegram }