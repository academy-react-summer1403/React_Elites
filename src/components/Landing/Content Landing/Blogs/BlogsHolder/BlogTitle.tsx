import React from 'react'
import style from './Blogs.module.css'
import { useGlobalState } from '../../../../../State/State';

const BlogTitle = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}>بلاگ های برتر هفته</div>
  )
}

export default BlogTitle