import { NavLink } from "react-router-dom";
import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';

const HomePageButton = () => {
  const { t } = useTranslation();


  return (

    <div className="flex max-w-96  justify-center mt-8">
      <div className={styleLogin.HomePageButton}>
        <NavLink to="/" className="border-non  cursor-pointer text-blue-700 text-sm font-DannaBold tracking-tight"> {t("MainPage")} </NavLink>
        <img src="https://img.icons8.com/?size=64&id=Gc9qmZNN9yFN&format=png" className="w-5 text-black text-sm font-DannaExtraBold "></img>
      </div>
    </div>

  )
}

export { HomePageButton }