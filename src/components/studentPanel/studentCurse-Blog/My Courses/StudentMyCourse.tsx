import React from 'react'
import style from "./style.module.css";
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch';
import { ListCardBlogs } from './Courses Grid/index/CoursesCardsList';
import { ChangePageList } from '../../../blogs/ChangePageList/ChangePageList';
import { useGlobalState } from '../../../../State/State';

const StudentMyCourse = () => {
const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.page2}>
        <div className={style.titleHolder}>
            <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>دوره من</h1>
        </div>
        <StudentPanelSearch />
        <div className={style.list} data-theme={darkMode ? "dark" : "lightMode"}> 
            <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
                <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
                <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>نام </div>
                <div className={style.teacherList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> مدرس</div>
                <div className={style.dateStartList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ برگزاری </div>
                <div className={style.dateEndList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ اتمام </div>
                <div className={style.levelList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>سطح </div>
                <div className={style.eyeList}> </div>
            </div>
            <ListCardBlogs />
            <div className="flex justify-center mt-8">
            <ChangePageList />
            </div>  
        </div>
    </div>
  )
}

export {StudentMyCourse}