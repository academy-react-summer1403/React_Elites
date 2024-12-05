import style from "../../Style/Compare.module.css";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../core/services/Functions/ThemeIdentifier";
const Compare = () => {

  const { t } = useTranslation();
  return (
    <div className={style.Holder} data-theme={identifier("dark")}>
      <div className={style.Images}> 
        <img className={style.imageProgramming} src='https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg' />
        <span className={style.Line} data-theme={identifier("darkNoBG")}></span>
        <img className={style.imageProgramming} src='https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg' />
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc")}>نام دوره</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>والیبال</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>اموزش ساخت تریاک</div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc")}>سایر توضیحات</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>توضیحات اول</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>توضیحات دوم</div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc")}>قیمت</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>1000تومان</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>300000تومان </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc")}>تعداد لایک ها</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>198</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>300 </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc")}>وضعیت</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>در حال برگزاری</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}> در حال برگزاری</div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc")}>سطح آموزشی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>مبتدی</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>پیشرفته </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc")}>دسته بندی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>بک اند</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>فرانت اند </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc")}>نام استاد</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>نوید</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG")}>طاها </div>
        </div>
      </div>
    </div>
  )
}

export { Compare }