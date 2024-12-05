import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import style from './link.module.css'

import { LastPassword } from "./lastPassword";
import { Button } from "./Button";
import { Form, Formik } from "formik";
import { postChangePass } from "../../../../../core/services/api/postChangePass";
import { NewPassword } from "./NewPassword";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const LinksHolder = () => {
  
    const { t } = useTranslation();

    const sendNewPass = async (value) => {
        let res = await postChangePass(value)
        if (res.success == true) {
            toast.success("رمز عبور تغییر یافت")
        }
    }

    const validation = yup.object().shape({
        oldPassword: yup.string().required("لطفا رمز عبور را وارد کنید"),
        newPassword: yup.string().required("لطفا تکرار رمز جدید عبور وارد کنید"),
      });

    return (
        <>
            <Toaster />
            <Formik
                onSubmit={(value) => sendNewPass(value)}
                validationSchema={validation}
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