import styleBlogList from '../../../../Style/blogList.module.css'
import { useGlobalState } from "../../../../State/State.tsx";
import { useTranslation } from 'react-i18next';

const PopularInputBlogs = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <>
      <input type="radio" name="sort" id="Popular" className={styleBlogList.inputSort} />
      <label htmlFor="Popular" className={styleBlogList.sortButtonLabel} data-theme={darkMode ? "darkSmall" : "lightMode"}> {t("popular")} </label>
    </>
  )
}

export { PopularInputBlogs }