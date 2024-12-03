import { Field, Formik } from "formik";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import { useGlobalState } from "../../../../../State/State";



const RecoveryEmail = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (

        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}> ایمیل پشتیبان </h1>
                <Field name="recoveryEmail" className={styleInform.Input} data-theme={darkMode ? "dark" : "lightMode"} />
            </div>
        </div>

    )
}

export { RecoveryEmail }