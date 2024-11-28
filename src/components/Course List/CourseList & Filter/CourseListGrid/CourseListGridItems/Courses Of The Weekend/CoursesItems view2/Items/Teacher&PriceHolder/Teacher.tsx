import { useTranslation } from 'react-i18next';
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../../../State/State';

const Teacher = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.teacher} data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>{t("lecturer")}:  {props.teacher}</div>
  )
}

export {Teacher}