import styleBlogList from '../../../../Style/blogList.module.css'
import { useGlobalState } from "../../../../State/State.tsx";
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier.ts';

const TitleSortBlogs = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <>
      <h1 className={styleBlogList.sortingTitle} data-theme={identifier("darkNoBG")}>{t("order")}</h1>
    </>
  )
}

export { TitleSortBlogs }