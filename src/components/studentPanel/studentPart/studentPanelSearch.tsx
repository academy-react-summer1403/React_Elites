import { Formik,Field  } from "formik";
import style from "./../../../Style/studentPanel.module.css";



const StudentPanelSearch = () => {

  return (

    <Formik>
      {(form) => (
            <div className={style.searchAndDateHolder}>  
            <div className={style.searchHolder}> 
            <div>
                <label className="text-base font-bold text-black pb-1.5">جست‌جو</label>
                <div className={style.searchLogo}> </div>
            </div>
            <Field className={style.input} placeholder="دوره مورد نظر را جست‌جو کنید..." />
            </div>
            <div className={style.dateHolder}> 
            <div>
                <label className="text-base font-bold text-black pb-1.5">تاریخ برگزاری - اتمام</label>
                <div className={style.dateLogo}> </div>
            </div>
            <Field className={style.input} placeholder="29 اردیبهشت 1403 - 5 خرداد 1403"/>
            </div>
        </div>
      )}
    </Formik>

  )
}

export { StudentPanelSearch }