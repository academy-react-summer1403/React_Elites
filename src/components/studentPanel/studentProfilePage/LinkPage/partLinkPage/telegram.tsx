import { Field, Formik } from "formik";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import { useGlobalState } from "../../../../../State/State";


const Telegram = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
        <div className={styleInform.email}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>تلگرام</h1>
                <Field name="telegramLink" className={styleInform.Input} placeholder="لینک تلگرام خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"} />
            </div>
        </div>
    )
}

export { Telegram }