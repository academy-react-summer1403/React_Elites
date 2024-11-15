import styleBlogList from '../../../../Style/blogList.module.css'
import { useGlobalState } from "../../../../State/State.tsx";
import { useTranslation } from 'react-i18next';

const NewInputBlogs = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <>
      <input type="radio" checked name="sort" id="New" className={styleBlogList.inputSort} />
      <label htmlFor="New" className={styleBlogList.sortButtonLabel} data-theme={darkMode ? "darkSmall" : "lightMode"}> {t("newest")} </label>
    </>
  )
}

export { NewInputBlogs }