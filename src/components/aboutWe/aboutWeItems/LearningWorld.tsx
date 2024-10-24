import React from 'react'
import style from './cardsBlogsListStyle.module.css'
import { useGlobalState } from '../../../State/State';

const LearningWorld = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holderP}>
      <span data-theme={darkMode ? "dark" : "lightMode"}>جامعه یادگیری</span>
      <p className={style.courseCounts} data-theme={darkMode ? "dark" : "lightMode"}>یکی از مهم‌ترین مزایای یادگیری در آکادمی سپهر، ارتباط با یک جامعه بزرگ و فعال از علاقه‌مندان به تکنولوژی است. ما در آکادمی سپهر به ایجاد فضایی تعاملی و دوستانه اهمیت می‌دهیم که در آن دانشجویان می‌توانند با یکدیگر در ارتباط باشند، تجربیات خود را به اشتراک بگذارند و از حمایت‌های متقابل برخوردار شوند. این جامعه یادگیری باعث می‌شود که فرآیند یادگیری لذت‌بخش‌تر و اثربخش‌تر باشد، زیرا شما می‌توانید از تجربیات دیگران استفاده کنید و در صورت نیاز به کمک، از حمایت‌های آن‌ها برخوردار شوید.</p>
    </div>
  )
}

export {LearningWorld}