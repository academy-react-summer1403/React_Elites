import { useGlobalState } from "../../../State/State";
import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const HeaderLogin1 = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={styleLogin.HeaderLogin}>
      <h1 data-theme={identifier("darkNoBG")} className="text-black text-2xl font-DannaDemiBold mt-7 mb-4">{t("login1TitleHeader")} </h1>
      <p data-theme={identifier("darkNoBGDisc")} className="text-gray-400 text-sm font-DannaDemiBold">{t("login1Desc1Header")}<br /> {t("login1Desc2Header")}</p>
    </div>

  )
}

export { HeaderLogin1 }