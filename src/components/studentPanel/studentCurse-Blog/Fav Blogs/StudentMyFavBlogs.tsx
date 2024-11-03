import React, { useEffect, useState } from 'react'
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch'
import { FavBlogsCardsList } from './FavBlogsGrid/index/FavBlogsCardsList'
import style from "./style.module.css";
import { useGlobalState } from '../../../../State/State';
import { getFavBlogs } from '../../../../core/services/api/getFavBlogs';

const StudentMyFavBlogs = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [userFavBlogsObj, setuserFavBlogsObj] = useState([])
    
    const getFavBlogsCall = async () => {
    const userFavouriteBlogsRes = await getFavBlogs();
    setuserFavBlogsObj(userFavouriteBlogsRes.myFavoriteNews)
    }
    
    useEffect(() => {
    getFavBlogsCall()
    }, [])

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
            <div className={style.viewList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> بازدیدکنندگان</div>
            <div className={style.dateUpdateList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>تاریخ آخرین تغییرات </div>
            <div className={style.levelList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>امتیاز </div>
            <div className={style.eyeList}> </div>
            </div>
            <FavBlogsCardsList userFavBlogsObj={userFavBlogsObj} />
        </div>
        </div>
    )
    }

export {StudentMyFavBlogs}