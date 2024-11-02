import React from 'react'
import style from './style.module.css'
import { Title } from './Title'
import { Content } from './Content'
import { Footer } from './Footer'
import { useGlobalState } from '../../../../../State/State'

const Comment = ({describe, title, autor, dissLikeCount, likeCount, inserDate, currentUserIsLike, currentUserIsDissLike, id}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.comments} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <Title title={title} />
        <Content describe={describe} />
        <Footer id={id} autor={autor} dissLikeCount={dissLikeCount} likeCount={likeCount} inserDate={inserDate} currentUserIsLike={currentUserIsLike} currentUserIsDissLike={currentUserIsDissLike}/>
    </div>
  )
}

export {Comment}