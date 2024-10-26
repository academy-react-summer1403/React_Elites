import { Formik,Field  } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../State/State";



const StudentPanelSearch = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <Formik>
      {(form) => (
            <div className={style.searchAndDateHolder}>  
            <div className={style.searchHolder}> 
            <div>
                <label className="text-base font-DannaBold text-black pb-1.5" data-theme={darkMode ? "darkNoBG" : "lightMode"}>جست‌جو</label>
                <div className={style.searchLogo}> </div>
            </div>
            <Field className={style.input} placeholder="دوره مورد نظر را جست‌جو کنید..." data-theme={darkMode ? "dark" : "lightMode"}/>
            </div>
              <div className={style.dateHolder}> 
                <div>
                    <label className="text-base font-DannaBold text-black pb-1.5" data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ برگزاری - اتمام</label>
                    <div className={style.dateLogo}> </div>
                </div>
                <Field className={style.input} placeholder="29 اردیبهشت 1403 - 5 خرداد 1403" data-theme={darkMode ? "dark" : "lightMode"}/>
            </div>
        </div>
      )}
    </Formik>

  )
}

export { StudentPanelSearch }