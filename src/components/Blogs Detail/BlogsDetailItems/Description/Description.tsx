import React from 'react'
import style from './Description.module.css'
import { useGlobalState } from '../../../../State/State';
import { Rate } from 'antd';
import { StarFilled} from '@ant-design/icons';
import { SyncLoader } from 'react-spinners';
import { postBlogRate } from '../../../../core/services/api/postBlogRate';

const Description = ({description, isLoading, rate, id}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.containerDesc}>
        <div className={style.title} data-theme={darkMode ? "dark" : "lightMode"}> توضیحات دوره </div>
        {isLoading ? <SyncLoader /> : <p className={style.paragraph} data-theme={darkMode ? "dark" : "lightMode"}>{description}</p>}
        <div className={style.copyLink}>کپی کردن لینک صفحه</div>
        <Rate style={{margin: "0 10px 0 10px"}} character={<StarFilled style={{fontSize: "30px"}} /> } defaultValue={rate} disabled={rate != 0 ? true : false} onChange={(value) => postBlogRate(id, value) }/>
        <div className={style.yourRate}> امتیاز بدید </div>
    </div>

  )
}

export {Description}