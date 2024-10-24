import React from 'react'
import style from './Main.module.css'
import { BigImage } from './BigImage/BigImage'
import { BigDetail } from './BigDetail/BigDetailHolder/BigDetail'

const Main = ({dislike, image, rate, comments, like, price, teacher, status, level, category, title}) => {
  return (
    <div className={style.main}>

        <BigDetail 
          dislike={dislike}
          dislike={dislike}
          like={like}
          rate={rate}
          comments={comments}
          price={price}
          teacher={teacher}
          status={status}
          level={level}
          category={category}
          title={title}
        />
        <BigImage image={image} />

    </div>
  )
}

export {Main}