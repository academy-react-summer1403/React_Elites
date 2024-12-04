import style from "./../../../../../Style/studentPanel.module.css";
import s from './modal.module.css'
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { Modal } from "antd";
import { Comment } from "./comment";
const TitleHeaderMyCommentList = ({courseCommentt}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBlog, setisBlog] = useState(false)
  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div data-theme={darkMode ? "dark" : "lightMode"} className={style.titleHeaderMyCourseList}>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>نظرات شما</h1>
        <div  onClick={showModal}>مشاهده بیشتر </div>
        <Modal data-theme={darkMode ? "dark" : "lightMode"} closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div data-theme={darkMode ? "dark" : "lightMode"} className={s.titleHolder}>
            <div data-theme={darkMode ? "darkNoBG" : "lightMode"} className={s.close}> بستن </div>
            <div className={s.blogOrCourse}>
              <div  className={isBlog === false ? s.courses : s.selected} onClick={() => setisBlog(true)}> بلاگ ها </div>
              <div className={isBlog === true ? s.courses : s.selected} onClick={() => setisBlog(false)}> دوره ها </div>
            </div>
            <div data-theme={darkMode ? "darkNoBG" : "lightMode"} className={s.title}> نظرات شما </div>
          </div>
          <div data-theme={darkMode ? "dark" : "lightMode"} className={s.holderComments}>
          {courseCommentt.map((item, index) => {
            return(
              <Comment
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
        </Modal>
      </div>
      </>
  )
}

export {  TitleHeaderMyCommentList }