import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image'
import { Title } from './index/Items/Title'
import { Teacher } from './index/Teacher&Date&View/Teacher'
import { Date } from './index/Teacher&Date&View/Date'
import { Status } from './index/Teacher&Date&View/Status'
import { useGlobalState } from '../../../../../State/State'

const ReserveCards = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.holder}>
        <Image image={props.image} />
        <Title className={style.title} title={props.title} />
        <Teacher teacher={props.teacher} />
        <Date date={props.date} />
        <Date date={props.date} />
        <Status Status={props.Status}/>
        <div className={style.closeAndViewHolder}>
          <span className={style.View} data-theme={darkMode ? "view" : "lightMode"}></span>
          <span className={style.Close}></span>
        </div>
    </div>
  )
}

export {ReserveCards}