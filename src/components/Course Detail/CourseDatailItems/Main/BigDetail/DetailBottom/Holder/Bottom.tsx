import style from './Bottom.module.css'
import { Likes } from '../BottomItems/Likes'
import { DisLikes } from '../BottomItems/DisLikes'
import { DateEnd } from '../BottomItems/DateEnd'
import { DateStart } from '../BottomItems/DateStart'
import { useGlobalState } from '../../../../../../../State/State'


const Bottom = ({dislike, like, end, start, isLoading}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.bottom} data-theme={darkMode ? "dark" : "lightMode"}>
      <DisLikes isLoading={isLoading} dislike={dislike}  />
      <Likes isLoading={isLoading} like={like} />
      <DateEnd isLoading={isLoading} end={end} />
      <DateStart isLoading={isLoading} start={start} />
    </div>
  )
}

export { Bottom}