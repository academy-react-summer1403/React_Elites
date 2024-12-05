import style from "../../Style/Compare.module.css";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../core/services/Functions/ThemeIdentifier";
const Compare = () => {

  const { t } = useTranslation();
  return (
    <div className={style.Holder} data-theme={identifier("dark","dark2")}>
      <div className={style.Images}> 
        <img className={style.imageProgramming} src='https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg' />
        <span className={style.Line} data-theme={identifier("darkNoBG","dark2NoBG")}></span>
        <img className={style.imageProgramming} src='https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg' />
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>نام دوره</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>والیبال</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>اموزش ساخت تریاک</div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>سایر توضیحات</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>توضیحات اول</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>توضیحات دوم</div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>قیمت</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>1000تومان</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>300000تومان </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>تعداد لایک ها</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>198</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>300 </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>وضعیت</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>در حال برگزاری</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}> در حال برگزاری</div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>سطح آموزشی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>مبتدی</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>پیشرفته </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>دسته بندی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>بک اند</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>فرانت اند </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc")}>نام استاد</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>نوید</div>
 
          <div className={style.discCompare} data-theme={identifier("darkNoBG","dark2NoBG")}>طاها </div>
        </div>
      </div>
    </div>
  )
}

export { Compare }