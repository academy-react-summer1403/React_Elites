import { useGlobalState } from '../../../State/State';
import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image';
import { TitleAndCountHolder } from './index/TitleAndCountHolder';
import { NavLink } from "react-router-dom";

const CardBlogs = ({image, title,count,countN, LinkedinProf}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    
    <div className={style.holder} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <Image image={image && image.slice(0, 5) == "https" ? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s'} />
        <TitleAndCountHolder LinkedinProf={LinkedinProf} title={title} count={count} countN={countN} />
    </div>
  )
}

export {CardBlogs}