import React from 'react'
import style from './AllComments.module.css'
import { Comment } from '../Items/Comment'
import { useGlobalState } from '../../../../../State/State';

const AllComments = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.container}>
      <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}> نظرات دانشجو ها و اساتید </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export {AllComments}