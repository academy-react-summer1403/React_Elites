import React from 'react'
import style from './Blogs.module.css'
import { useGlobalState } from '../../../../State/State';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';

const BlogTitle = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title} data-theme={identifier("dark")}>بلاگ های مرتبط</div>
  )
}

export default BlogTitle