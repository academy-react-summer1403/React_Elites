import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const HeaderLogin2 = () => {
  const { t } = useTranslation();
  return (

    <div className="h-full  my-8 mx-0 mt-20">
      <h1 className="text-black text-2xl font-DannaDemiBold mt-4 mb-4">{t("login2TitleHeader")} </h1>
      <p className="text-gray-400 text-sm font-DannaMedium">{t("login2Desc1Header")} <br /> {t("login2Desc2Header")}</p>
    </div>

  )
}

export { HeaderLogin2 }