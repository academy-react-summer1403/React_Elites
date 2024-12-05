import style from './Items.module.css'
import { Image } from './Image'
import { Title } from './Title'
import { useGlobalState } from '../../../../../State/State'
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
const ImageAndTitle = ({title, Image}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <div className={style.TitleAndImageHolder} data-theme={identifier("darkNoBG")}>
      <Image Image={Image}/>
      <Title title={title} />
    </div>
  )
}

export { ImageAndTitle }