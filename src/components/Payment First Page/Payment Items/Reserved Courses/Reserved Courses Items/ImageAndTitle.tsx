import style from './Items.module.css'
import { Image } from './Image'
import { Title } from './Title'
import { useGlobalState } from '../../../../../State/State'

const ImageAndTitle = ({title, Image}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.TitleAndImageHolder} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
      <Image Image={Image}/>
      <Title title={title} />
    </div>
  )
}

export { ImageAndTitle }