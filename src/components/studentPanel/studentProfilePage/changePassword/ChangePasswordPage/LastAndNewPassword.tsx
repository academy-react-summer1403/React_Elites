import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import style from './link.module.css'
import { useGlobalState } from "../../../../../State/State";
import { LastPassword } from "./lastPassword";
import { Button } from "./Button";
import { Form, Formik } from "formik";
import { postChangePass } from "../../../../../core/services/api/postChangePass";
import { NewPassword } from "./NewPassword";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const LinksHolder = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

    const sendNewPass = async (value) => {
        let res = await postChangePass(value)
        if (res.success == true) {
            toast.success("رمز عبور تغییر یافت")
        }
    }

    return (
        <>
            <Toaster />
            <Formik
                onSubmit={(value) => sendNewPass(value)}
                initialValues={{ oldPassword: '', newPassword: '' }}
                className={styleInform.left}
            >
                <Form>
                    <LastPassword />
                    <NewPassword />
                    <Button />
                </Form>
            </Formik>
        </>
    )
}

export { LinksHolder }