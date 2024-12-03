import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import style from './link.module.css'
import { useGlobalState } from "../../../../../State/State";
import { LastPassword } from "./lastPassword";
import { Button } from "./Button";
import { Form, Formik } from "formik";
import { postChangePass } from "../../../../../core/services/api/postChangePass";
import { NewPassword } from "./NewPassword";
import toast, { Toaster } from "react-hot-toast";

const LinksHolder = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    const sendNewPass = async (value) => {
        let res = await postChangePass(value)
        if(res.success == true){
            toast.success("رمز عبور تغییر یافت")
        }
    }

    return (
        <>
        <Toaster />
        <Formik 
        onSubmit={(value) => sendNewPass(value)}
        initialValues={{oldPassword: '', newPassword: ''}} 
        className={styleInform.left}
        >
                <Form>
                    <LastPassword />
                    <NewPassword />
                    <button type="submit" data-theme={darkMode ? "darkNoBG" : "lightMode"} className={style.button}>تغییر رمز عبور</button>
                    {/* <Button /> */}
                </Form>
        </Formik>
        </>
    )
}

export { LinksHolder }