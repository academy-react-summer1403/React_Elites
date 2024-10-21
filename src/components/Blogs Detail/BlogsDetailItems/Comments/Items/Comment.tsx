import React from 'react'
import style from './style.module.css'
import { Title } from './Title'
import { Content } from './Content'
import { Footer } from './Footer'
import { useGlobalState } from '../../../../../State/State'

const Comment = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.comments} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <Title />
        <Content />
        <Footer />
    </div>
  )
}

export {Comment}