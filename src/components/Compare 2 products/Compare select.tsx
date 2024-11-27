import style from "../../Style/Compare.module.css";
import { useTranslation } from 'react-i18next';
import { Search } from './Items/Serach';
import React, { useEffect, useState } from 'react'
import { useGlobalState } from '../../State/State'
import { useParams } from 'react-router-dom'
import { getCourseById } from '../../core/services/api/courseById'
import { getCourseComment } from '../../core/services/api/getCourseComment'
import { allCourseList } from '../../core/services/api/AllCourseList'

const CompareSelect = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  const [isLiked, setIsLiked] = useGlobalState('courseLike');
  const [isDisLiked, setDiIsLiked] = useGlobalState('courseDisLike');
  const [isReserved, setIsReserved] = useGlobalState('isReserved');
  const [isFavourite, setIsFavourite] = useGlobalState('isFavoriteCourse');
  const [courseDetail, setCourseDetail] = useState([])
  const [comments, setComments] = useState([])
  const [related, setrelated] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const { id } = useParams();

  const getCourseDetail = async () => {
    const Details = await getCourseById(id)
    const res = await getCourseComment(id)
    setCourseDetail(Details)
    setComments(res)
    setDiIsLiked(Details?.currentUserDissLike)
    setIsLiked(Details?.currentUserLike)
    setIsReserved(Details?.isCourseReseve)
    setIsFavourite(Details?.isUserFavorite)
    setDiIsLiked(Details?.currentUserDissLike)

    const list = await allCourseList(1)
    setrelated(list.courseFilterDtos.filter((e) => String(e.technologyList) == String(Details?.techs)))

    console.log(related)

    setisLoading(false)
  }


  useEffect(() => {
    getCourseDetail()
  }, [])

  useEffect(() => {
    getCourseDetail()
  }, [id, isLiked, isReserved, isFavourite])

  const [searchValue, setSearchValue] = useState("")
  const [isSearched, setIsSearched] = useState(false)

  return (
    <div className={style.Holder} data-theme={darkMode ? "dark" : "lightMode"}>
      <div className={style.Images}>
        <img className={style.imageProgramming} src={courseDetail?.imageAddress}src={courseDetail?.imageAddress && courseDetail?.imageAddress.slice(0,5) == "https" && courseDetail?.imageAddress !== null ? courseDetail?.imageAddress : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} />

        <Search setSearchValue={setSearchValue} setIsSearched={setIsSearched} searchValue={searchValue} isSearched={isSearched} />
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>نام دوره</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{courseDetail?.title}</div>


        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>سایر توضیحات</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{courseDetail?.describe}</div>


        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>قیمت</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{courseDetail?.cost}  {t("toman")}</div>


        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>تعداد لایک ها</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{courseDetail?.likeCount}</div>


        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>وضعیت</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{courseDetail?.courseStatusName}</div>


        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>سطح آموزشی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{courseDetail?.courseLevelName}</div>


        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>دسته بندی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{courseDetail?.techs}</div>


        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>نام استاد</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{courseDetail?.teacherName}</div>


        </div>
      </div>
    </div>
  )
}

export { CompareSelect }