import React from 'react'
import style from './Description.module.css'
import { useGlobalState } from '../../../../State/State';
import { Rate } from 'antd';
import { StarFilled} from '@ant-design/icons';

const Description = ({description}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.containerDesc}>
        <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}> توضیحات دوره </div>
        <p className={style.paragraph} data-theme={darkMode ? "dark" : "lightMode"}>{description}</p>
        <div className={style.copyLink}>کپی کردن لینک صفحه</div>
        <Rate onChange={(value) => console.log(value)} character={<StarFilled />} style={{fontSize: ""}} />
        <div className={style.yourRate}> امتیاز بدید </div>
    </div>

  )
}

export {Description}