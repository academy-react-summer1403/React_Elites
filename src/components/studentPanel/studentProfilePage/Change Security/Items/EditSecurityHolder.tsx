import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import style from './EditSecurity.module.css'

import { Form, Formik } from "formik";
import { RecoveryEmail } from "./RecoveyEmail";
import { TwoStep } from "./TwoStep";
import { useEffect, useState } from "react";
import { putSecurityInfo } from "../../../../../core/services/api/putEditSecurity";
import { getSecurityInfo } from "../../../../../core/services/api/getSecurityInfo";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const EditSecurityHolder = () => {
  
    const [twoStep, settwoStep] = useState(false)
    const [user, setuser] = useState({})
    const { t } = useTranslation();

    const getSecurityInfoo = async () => {
        let res = await getSecurityInfo()
        setuser(res)
        settwoStep(res.twoStepAuth)
    }

    useEffect(() => {
        getSecurityInfoo()
    }, [])
    

    const changeUserSetting = async (value) => {
        let res2 = await putSecurityInfo(value)

        if(res2.success == true){
            toast.success("تنظیمات کاربری تغییر یافت")
        }
    }

    return (
        <>
        <Toaster />
            <Formik 
            onSubmit={(value) => changeUserSetting(value)}
            initialValues={{twoStepAuth: twoStep, recoveryEmail: user.recoveryEmail, baseUrl: 'https://classapi.sepehracademy.ir/api'}} 
            enableReinitialize={true}
            className={styleInform.left}
            >
                <Form>
                    <RecoveryEmail />
                    <TwoStep twoStep={twoStep} settwoStep={settwoStep} />
                    <button type="submit" data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={style.button}> {t("RecordChanges")} </button>
                </Form>
            </Formik>
        </>
    )
}

export { EditSecurityHolder }