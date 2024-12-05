import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import styleLink from "./../../LinkPage/partLinkPage/link.module.css";
import { Form, NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const TwoStep = ({twoStep, settwoStep}) => {
  
    const { t } = useTranslation();

    return (
        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={identifier("darkNoBG","dark2NoBG")}>{t("Two-stepLogin")}</h1>
                <input checked={twoStep ? true : false} onChange={() => settwoStep(!twoStep)} className={styleInform.checkBox} type="checkbox" data-theme={identifier("dark","dark2")} />
            </div>
        </div>

    )
}

export { TwoStep }