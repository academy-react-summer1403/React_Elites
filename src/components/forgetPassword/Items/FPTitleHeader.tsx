import { useTranslation } from 'react-i18next';

const FPTitleHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full max-w-96 my-8 mx-0">
      <h1 className="text-black text-2xl font-DannaBold m-4">{t("ForgotPasswordHeaderTitle")}</h1>
      <p className="text-gray-400 text-sm font-DannaDemiBold">{t("ForgotPasswordHeaderDesc")}</p>
    </div>
  )
}

export { FPTitleHeader }