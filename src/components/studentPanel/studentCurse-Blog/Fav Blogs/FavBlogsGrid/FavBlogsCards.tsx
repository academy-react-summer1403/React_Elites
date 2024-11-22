import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image'
import { Title } from './index/Items/Title'
import { Teacher } from './index/Teacher&Date&View/Teacher'
import { Date } from './index/Teacher&Date&View/Date'
import { useGlobalState } from '../../../../../State/State'
import { Level } from './index/Items/level&CategoryHolder/Level'
import { NavLink } from 'react-router-dom'

const FavBlogsCards = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holder}>
        <Image image={props.image} />
        <Title title={props.title} />
        <Teacher teacher={props.teacher} />
        <Date date={props.date} />
        <Level level={Math.round(props.level)}/>
        <div className={style.closeAndViewHolder}>
          <NavLink to={"/Blogs-Detail/" + props.id} className={style.View} data-theme={darkMode ? "view" : "lightMode"}></NavLink>
          <span className={style.Close}></span>
        </div>
    </div>
  )
}

export {FavBlogsCards}