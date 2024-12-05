import React, { useRef, useState } from 'react'
import style from './Description.module.css'

import { PropagateLoader, SyncLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';
import { Rate } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { postCoourseRate } from '../../../../core/services/api/postCourseRate';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
const Description = ({description, isLoading, id, currentUserRateNumber}) => {

  const [value, setvalue] = useState(`http://localhost:5173/Course-Detail/${id}`)
  const [copySuccess, setCopySuccess] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(value)
    if(copySuccess === true){
      toast.success("لینک صفحه کپی شد")
    }
  };

  return currentUserRateNumber >= 0 && (
    <div className={style.containerDesc}>
        <Toaster />
        <div className={style.title} data-theme={identifier("darkNoBG")}> توضیحات دوره </div>
        {isLoading ? <SyncLoader /> : <p className={style.paragraph} data-theme={identifier("darkNoBG")}>{description}</p>}
        <div className={style.copyLink} onClick={() => {
          copyToClipboard()
          setCopySuccess(true)
        }}>کپی کردن لینک صفحه</div>
        <Rate style={{margin: "0 10px 0 10px"}} character={<StarFilled style={{fontSize: "30px"}} /> } defaultValue={currentUserRateNumber} disabled={currentUserRateNumber != 0 ? true : false} onChange={(value) => postCoourseRate(id, value) }/>
        <div className={style.yourRate}> امتیاز بدید </div>
    </div>

  )
}

export {Description}