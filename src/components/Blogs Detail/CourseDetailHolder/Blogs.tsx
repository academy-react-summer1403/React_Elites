import React from 'react'
import style from './BlogsDetail.module.css'
import { Main } from '../BlogsDetailItems/Main/Main'
import { Description } from '../BlogsDetailItems/Description/Description'
import { AllComments } from '../BlogsDetailItems/Comments/Holder/AllComments'
import { Blogs } from '../Blogs/BlogsHolder/Blogs'
import { useGlobalState } from '../../../State/State'

const BlogsDetail = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.body} data-theme={darkMode ? "dark" : "lightMode"}>
          <div className={style.holder}>
        <Main />
        <Description />
        <AllComments />
        <Blogs />
    </div>
    </div>
  )
}

export {BlogsDetail}