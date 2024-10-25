import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image'
import { Title } from './index/Items/Title'
import { Teacher } from './index/Teacher&Date&View/Teacher'
import { Date } from './index/Teacher&Date&View/Date'
import { Level } from './index/Teacher&Date&View/Level'
import { useGlobalState } from '../../../../../State/State'

const CardBlogs = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holder}>
        <Image image={props.image} />
        <Title className={style.title} title={props.title} />
        <Teacher teacher={props.teacher} />
        <Date date={props.date} />
        <Date date={props.date} />
        <Level level={props.level}/>
        <span className={style.View} data-theme={darkMode ? "view" : "lightMode"}></span>
    </div>
  )
}

export {CardBlogs}