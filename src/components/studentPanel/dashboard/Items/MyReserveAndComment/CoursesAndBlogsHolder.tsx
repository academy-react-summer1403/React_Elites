import style from "./../../../../../Style/studentPanel.module.css";
import s from './modal.module.css'
import { useGlobalState } from "../../../../../State/State";
import {CommentMain} from './CommentMain'


const CoursesAndBlogsHolder = ({courseCommentt}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');
  

  return (

    <div className={style.CoursesAndBlogsHolder}>
      <div className={style.CoursesAndBlogsLine}></div>
      <h1 className={style.CoursesAndBlogsSt} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>دوره ها و بلاگ ها </h1>
      <div className={style.CoursesAndBlogsLine}></div>
      <div className={s.holderCommentsD}>
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