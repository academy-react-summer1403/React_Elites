import React, { useEffect, useState } from 'react'
import { StudentPanelSearch } from '../../studentPart/studentPanelSearch'
import { FavBlogsCardsList } from './FavBlogsGrid/index/FavBlogsCardsList'
import style from "./style.module.css";

import { getFavBlogs } from '../../../../core/services/api/getFavBlogs';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
const StudentMyFavBlogs = () => {
    const { t } = useTranslation();
  
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
            <h1 className={style.titleHeaderTopStudent} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("FavoriteBlogs")}</h1>
        </div>
        <StudentPanelSearch />
        <div className={style.list} data-theme={identifier("dark","dark2","green","pink","blue","red")}> 
            <div className={style.headerList} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
            <div className={style.imgList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}># </div>
            <div className={style.nameList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("name")} </div>
            <div className={style.viewList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("Visitors")}</div>
            <div className={style.dateUpdateList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("lastChangeDate")} </div>
            <div className={style.levelList} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("Score")} </div>
            <div className={style.eyeList}> </div>
            </div>
            <FavBlogsCardsList isLoading={isLoading} userFavBlogsObj={userFavBlogsObj} />
        </div>
        </div>
    )
    }

export {StudentMyFavBlogs}