import styleBlogList from '../../../../Style/blogList.module.css'
import { useGlobalState } from "../../../../State/State.tsx";
import { useTranslation } from 'react-i18next';

const TitleSortBlogs = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <>
      <h1 className={styleBlogList.sortingTitle} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("order")}</h1>
    </>
  )
}

export { TitleSortBlogs }