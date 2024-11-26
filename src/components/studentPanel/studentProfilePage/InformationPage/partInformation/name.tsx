import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from 'react-i18next';


const Name = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');



    return (

        <>
            <div className={styleInform.name}>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("name")}</h1>
                    <Field name="fName" className={styleInform.Input} placeholder="نام خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"} />
                </div>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("lastName")}</h1>
                    <Field name="lName" className={styleInform.Input} placeholder="نام خانوادگی خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"} />
                </div>
            </div>

        </>
    )
}

export { Name }