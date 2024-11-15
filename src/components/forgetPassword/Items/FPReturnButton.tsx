import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const FPReturnButton = () => {
  const { t } = useTranslation();
  return (
    <div className="flex max-w-96  justify-center mt-4">
      <div className=" flex rounded-full justify-center gap-1.5 w-28 px-4 py-2 bg-white border border-px border-gray-300">
        <NavLink to="/Auth/Login" className="border-non cursor-pointer text-blue-700 text-sm font-DannaBold tracking-tight">&lt; {t("return")} </NavLink>
      </div>
    </div>
  )
}

export { FPReturnButton }