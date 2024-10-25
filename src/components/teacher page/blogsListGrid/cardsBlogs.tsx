import { useGlobalState } from '../../../State/State';
import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image';
import { TitleAndCountHolder } from './index/TitleAndCountHolder';
import { NavLink } from "react-router-dom";

const CardBlogs = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    
    <div className={style.holder} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <Image image={props.image} />
        <TitleAndCountHolder title={props.title} count={props.count} countN={props.countN} />
    </div>
  )
}

export {CardBlogs}