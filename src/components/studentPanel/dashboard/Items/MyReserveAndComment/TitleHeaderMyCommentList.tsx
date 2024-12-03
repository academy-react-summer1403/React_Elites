import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
const TitleHeaderMyCommentList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <>
      <div className={style.titleHeaderMyCourseList}>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>نظرات شما</h1>
        <div >مشاهده بیشتر </div>
        <Modal>
          <ModalHeader>

          </ModalHeader>
          <ModalBody>
            
          </ModalBody>
        </Modal>
      </div>
      </>
  )
}

export {  TitleHeaderMyCommentList }