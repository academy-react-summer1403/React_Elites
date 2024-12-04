import style from "./../../../../../Style/studentPanel.module.css";
import s from './modal.module.css'
import { useGlobalState } from "../../../../../State/State";
import {CommentMain} from './CommentMain'
import { useTranslation } from "react-i18next";


const CoursesAndBlogsHolder = ({courseCommentt}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');
  const { t } = useTranslation();

  return (

    <div className={style.CoursesAndBlogsHolder} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
      <div className={style.CoursesAndBlogsLine}></div>
      <h1 className={style.CoursesAndBlogsSt} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>{t("BlogsAndCourses")} </h1>
      <div className={style.CoursesAndBlogsLine}></div>
      <div data-theme={darkMode ? "dark" : "lightMode"} className={s.holderCommentsD}>
      {courseCommentt.map((item, index) => {
        return(
          <CommentMain
            id={item.commentId}
            courseId={item.courseId}
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
    </div>
  )
}

export { CoursesAndBlogsHolder }