import { Formik,Field  } from "formik";
import style from "./../../../Style/studentPanel.module.css";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";

const StudentPanelSearch = () => {

  const { t } = useTranslation();

  return (

    <Formik>
      {(form) => (
            <div className={style.searchAndDateHolder}>  
            <div className={style.searchHolder}> 
            <div>
                <label className="text-base font-DannaBold text-black pb-1.5" data-theme={identifier("darkNoBG","dark2NoBG")}>{t("search")}</label>
                <div className={style.searchLogo}> </div>
            </div>
            <Field className={style.input} placeholder={t("searchCourses")} data-theme={identifier("dark","dark2")}/>
            </div>
              <div className={style.dateHolder}> 
                <div>
                    <label className="text-base font-DannaBold text-black pb-1.5" data-theme={identifier("darkNoBG","dark2NoBG")}>{t("dateStart-end")}</label>
                    <div className={style.dateLogo}> </div>
                </div>
                <input type="date" className={style.input} data-theme={identifier("dark","dark2")}/>
            </div>
        </div>
      )}
    </Formik>

  )
}

export { StudentPanelSearch }