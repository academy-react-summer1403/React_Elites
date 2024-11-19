import { useGlobalState } from '../../../State/State';
import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image';
import { TitleAndCountHolder } from './index/TitleAndCountHolder';
import { NavLink } from "react-router-dom";

const CardBlogs = ({image, title,count,countN}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    
    <div className={style.holder} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <Image image={image ? image : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} />
        <TitleAndCountHolder title={title} count={count} countN={countN} />
    </div>
  )
}

export {CardBlogs}