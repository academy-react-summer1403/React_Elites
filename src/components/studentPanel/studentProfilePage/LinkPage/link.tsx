import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleLink from "./../LinkPage/partLinkPage/link.module.css";
import { Form, NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { putUserInfoEdit } from "../../../../core/services/api/putUserInfoEdit";
import toast, { Toaster } from "react-hot-toast";
import { getProfile } from "../../../../core/services/api/getProfileInfo";
import { LinksHolder } from "./partLinkPage/LinkedinAndTelegramHolder";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";

const LinkForm = () => {
  
    const [user, setUser] = useState()
    const { t } = useTranslation();

    const updateProfileInfo = async (values) => {
        let userr = await putUserInfoEdit(values)
        if(userr.success === true){
            toast.success("عملیات با موفقیت انجام شد")
        }
    }
    const getUserInfo = async () => {
        const userInfo = await getProfile()
        setUser(userInfo)
    }
    useEffect(() => {
        getUserInfo()
    }, [])

    return user && (
        <Formik
            initialValues={{
                telegramLink: user.telegramLink,
                linkdinProfile: user.linkdinProfile
            }}
            onSubmit={(values) => updateProfileInfo(values)}
        >
            {(form) => (
                <Form>
                <Toaster />
                    <div className={style.titleHolder}>
                        <h1 className={style.title} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("myProfile")}</h1>
                    </div>
                    <div className={styleInform.page2}>
                        <div className={styleInform.rightHolder} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
                            <div className={styleInform.right}>
                                <NavLink to="/Student-Panel/Information" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("informationAccount")} </NavLink>
                                <NavLink to="/Student-Panel/Image" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("images")} </NavLink>
                                <NavLink to="/Student-Panel/Location" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("placeInform")} </NavLink>
                                <div><h1 className={styleLink.selected}>{t("links")} </h1></div>
                                <NavLink to="/Student-Panel/changePassword" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("ChangePassword")} </NavLink>  
                                <NavLink to="/Student-Panel/change-security" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("UserSettings")} </NavLink> 
                            </div>
                        </div>
                        <LinksHolder />
                    </div>
                </Form>
            )}
        </Formik>

    )
}

export { LinkForm }