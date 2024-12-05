import React, { useEffect, useState } from 'react'
import style from "./style.module.css";
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch';
import { ListCardBlogs } from './Courses Grid/index/CoursesCardsList';
import { ChangePageList } from '../../../blogs/ChangePageList/ChangePageList';
import { useGlobalState } from '../../../../State/State';
import { useTranslation } from 'react-i18next';
import { getMyCourse } from '../../../../core/services/api/getMyCourse';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
const StudentMyCourse = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [data, setdata] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const myCourses = async () => {
    let res = await getMyCourse()
    setdata(res.listOfMyCourses)
    setisLoading(false)
  }
  useEffect(() => {
    myCourses()
  }, [])
  
  return (
    <div className={style.page2}>
        <div className={style.titleHolder}>
            <h1 className={style.titleHeaderTopStudent} data-theme={identifier("darkNoBG")}>{t("myCourse")}</h1>
        </div>
        <StudentPanelSearch />
        <div className={style.list} data-theme={identifier("dark")}> 
            <div className={style.headerList} data-theme={identifier("darkSmall")}>
                <div className={style.imgList} data-theme={identifier("darkNoBG")}># </div>
                <div className={style.nameList} data-theme={identifier("darkNoBG")}>{t("name")} </div>
                <div className={style.teacherList} data-theme={identifier("darkNoBG")}> {t("lecturer")}</div>
                <div className={style.dateStartList} data-theme={identifier("darkNoBG")}>{t("HoldingDate")} </div>
                <div className={style.dateEndList} data-theme={identifier("darkNoBG")}>{t("CompletionDate")} </div>
                <div className={style.levelList} data-theme={identifier("darkNoBG")}>{t("level")} </div>
                <div className={style.eyeList}> </div>
            </div>
            <ListCardBlogs isLoading={isLoading} data={data} />
            <div className="flex justify-center mt-8">
            </div>  
        </div>
    </div>
  )
}

export {StudentMyCourse}