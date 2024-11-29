import style from "../../Style/Compare.module.css";
import { useTranslation } from 'react-i18next';
import { Search } from './Items Compare Select/Serach';
import { Image } from './Items Compare Select/Image';
import { Title } from './Items Compare Select/title';
import { Discription } from './Items Compare Select/Discription';
import { Price } from './Items Compare Select/Cost';
import { Like } from './Items Compare Select/Like';
import { Status } from './Items Compare Select/status';
import { Category } from './Items Compare Select/category';
import { Level } from './Items Compare Select/Level';
import { TeacherName } from './Items Compare Select/TeacherName';
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
      <Image Image={courseDetail?.imageAddress} />
      <Title title={courseDetail?.title}/>
      <Discription discription={courseDetail?.describe} />
      <Price cost={courseDetail?.cost}/>
      <Like like={courseDetail?.likeCount}/>
      <Status status={courseDetail?.courseStatusName}/>
      <Level level={courseDetail?.courseLevelName}/>
      <Category techs={courseDetail?.techs} />
      <TeacherName teacherName={courseDetail?.teacherName}/>
    </div>
  )
}

export { CompareSelect }