import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';
import { Comment } from "./comment";
import { getMyCourseComment } from "../../../../../core/services/api/getMyCourseComments";
import { useEffect, useState } from "react";


const CoursesAndBlogsHolder = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');
  const [courseCommentt, setcourseCommentt] = useState([])

  const courseComment = async () => {
    let res = await getMyCourseComment()
    setcourseCommentt(res.myCommentsDtos)
  }

  useEffect(() => {
    courseComment()
  }, [])
  

  return (

    <div className={style.CoursesAndBlogsHolder}>
      <div className={style.CoursesAndBlogsLine}></div>
      <h1 className={style.CoursesAndBlogsSt} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>دوره ها و بلاگ ها </h1>
      <div className={style.CoursesAndBlogsLine}></div>
      {courseCommentt.map((item, index) => {
        return(
          <Comment
            avatar={userInfoObj.currentPictureAddress}
            userName={userInfoObj.fName}
            date={item.insertDate}
            title={item.title}
            description={item.describe}
            likeCount={item.likeCount}
            disLikeCount={item.dislikeCount}
           />
        )
      })}
    </div>
  )
}

export { CoursesAndBlogsHolder }