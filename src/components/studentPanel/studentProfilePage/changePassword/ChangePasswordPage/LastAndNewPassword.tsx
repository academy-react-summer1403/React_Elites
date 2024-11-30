import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import style from './link.module.css'
import { useGlobalState } from "../../../../../State/State";
import { LastPassword } from "./lastPassword";
import { Button } from "./Button";
import { Form, Formik } from "formik";
import { postChangePass } from "../../../../../core/services/api/postChangePass";
import { NewPassword } from "./NewPassword";
import toast from "react-hot-toast";

const LinksHolder = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    const sendNewPass = async (value) => {
        console.log("salam")
        let res = await postChangePass(value)
        if(res.success == true){
            toast.success("رمز عبور تغییر یافت")
        }
    }

    return (
        <Formik 
        onSubmit={(value) => console.log(value)}
        initialValues={{oldPassword: '', newPassword: ''}} 
        className={styleInform.left}
        >
            {(form) => (
                <Form>
                    <LastPassword />
                    <NewPassword />
                    <button data-theme={darkMode ? "darkNoBG" : "lightMode"} className={style.button} type="submit">تغییر رمز عبور</button>
                    {/* <Button /> */}
                </Form>
            )}
        </Formik>
    )
}

export { LinksHolder }