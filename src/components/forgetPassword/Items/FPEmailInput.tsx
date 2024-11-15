import { Field, ErrorMessage } from "formik";
import { useTranslation } from 'react-i18next';

const FPEmailInput = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full max-w-96  my-4 mx-0 text-right">
      <label className="text-base font-DannaBold text-black pb-1.5">{t("email")}</label>
      <Field className="w-full text-right h-11 pr-3 mt-4 bg-white text-black border border-solid border-black-800 rounded-3xl text-black" name="password" placeholder="ایمیل خود را وارد کنید" />
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>
  )
}

export { FPEmailInput }