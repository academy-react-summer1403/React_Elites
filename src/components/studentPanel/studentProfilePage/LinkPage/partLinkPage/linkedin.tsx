import { Field, Formik } from "formik";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import { useGlobalState } from "../../../../../State/State";


const Linkedin = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>لینکدین</h1>
                <Field name="linkdinProfile" className={styleInform.Input} placeholder="لینک لینکدین خود را وارد کنید" data-theme={darkMode ? "dark" : "lightMode"} />
            </div>
        </div>
    )
}

export { Linkedin }