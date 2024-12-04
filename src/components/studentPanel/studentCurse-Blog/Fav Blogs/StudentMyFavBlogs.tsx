import React, { useEffect, useState } from 'react'
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch'
import { FavBlogsCardsList } from './FavBlogsGrid/index/FavBlogsCardsList'
import style from "./style.module.css";
import { useGlobalState } from '../../../../State/State';
import { getFavBlogs } from '../../../../core/services/api/getFavBlogs';
import { useTranslation } from 'react-i18next';

const StudentMyFavBlogs = () => {
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [userFavBlogsObj, setuserFavBlogsObj] = useState([])
    const [isLoading, setisLoading] = useState(true)
    
    const getFavBlogsCall = async () => {
    const userFavouriteBlogsRes = await getFavBlogs();
    setuserFavBlogsObj(userFavouriteBlogsRes.myFavoriteNews)
    setisLoading(false)
    }
    
    useEffect(() => {
    getFavBlogsCall()
    }, [])

    return (
        <div className={style.page2}>
        <div className={style.titleHolder}>
            <h1 className={style.titleHeaderTopStudent} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("FavoriteBlogs")}</h1>
        </div>
        <StudentPanelSearch />
        <div className={style.list} data-theme={darkMode ? "dark" : "lightMode"}> 
            <div className={style.headerList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
            <div className={style.imgList} data-theme={darkMode ? "darkNoBG" : "lightMode"}># </div>
            <div className={style.nameList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("name")} </div>
            <div className={style.viewList} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("Visitors")}</div>
            <div className={style.dateUpdateList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("lastChangeDate")} </div>
            <div className={style.levelList} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("Score")} </div>
            <div className={style.eyeList}> </div>
            </div>
            <FavBlogsCardsList isLoading={isLoading} userFavBlogsObj={userFavBlogsObj} />
        </div>
        </div>
    )
    }

export {StudentMyFavBlogs}