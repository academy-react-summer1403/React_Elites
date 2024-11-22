import style from "../../Style/Compare.module.css";
import { useGlobalState } from '../../State/State';
import { useTranslation } from 'react-i18next';

const Compare = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={style.Holder} data-theme={darkMode ? "dark" : "lightMode"}>
      <div className={style.Images}> 
        <img className={style.imageProgramming} src='https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg' />
        <span className={style.Line} data-theme={darkMode ? "darkNoBG" : "lightMode"}></span>
        <img className={style.imageProgramming} src='https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg' />
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>نام دوره</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>والیبال</div>
 
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>اموزش ساخت تریاک</div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>سایر توضیحات</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>توضیحات اول</div>
 
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>توضیحات دوم</div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>قیمت</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>1000تومان</div>
 
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>300000تومان </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>تعداد لایک ها</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>198</div>
 
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>300 </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>وضعیت</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>در حال برگزاری</div>
 
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}> در حال برگزاری</div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>سطح آموزشی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>مبتدی</div>
 
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>پیشرفته </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>دسته بندی</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>بک اند</div>
 
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>فرانت اند </div>
        </div>
      </div>
      <div className={style.Discription}>
        <h1 className={style.titleCompare} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>نام استاد</h1>
        <div className={style.DiscriptionCompare}>
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>نوید</div>
 
          <div className={style.discCompare} data-theme={darkMode ? "darkNoBG" : "lightMode"}>طاها </div>
        </div>
      </div>
    </div>
  )
}

export { Compare }