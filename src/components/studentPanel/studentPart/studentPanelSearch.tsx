import { Formik,Field  } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../State/State";
import { useTranslation } from 'react-i18next';


const StudentPanelSearch = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();

  return (

    <Formik>
      {(form) => (
            <div className={style.searchAndDateHolder}>  
            <div className={style.searchHolder}> 
            <div>
                <label className="text-base font-DannaBold text-black pb-1.5" data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("search")}</label>
                <div className={style.searchLogo}> </div>
            </div>
            <Field className={style.input} placeholder={t("searchCourses")} data-theme={darkMode ? "dark" : "lightMode"}/>
            </div>
              <div className={style.dateHolder}> 
                <div>
                    <label className="text-base font-DannaBold text-black pb-1.5" data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("dateStart-end")}</label>
                    <div className={style.dateLogo}> </div>
                </div>
                <input type="date" className={style.input} data-theme={darkMode ? "dark" : "lightMode"}/>
            </div>
        </div>
      )}
    </Formik>

  )
}

export { StudentPanelSearch }