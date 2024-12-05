import styleBlogList from '../../../../Style/blogList.module.css'
import { useGlobalState } from "../../../../State/State.tsx";
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier.ts';

const PopularInputBlogs = ({isClicked2, setisClicked2, setisClicked1, setapplySort, setSortType, setCol}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={isClicked2 ? styleBlogList.selectedC : styleBlogList.categories} data-theme={identifier("darkSmall")} onClick={() => {
      setisClicked1(false)
      setisClicked2(true)
      setapplySort(true)
      setSortType("DESC")
      setCol("insertDate")
    }}>
      {t("popular")}
    </div>
  )
}

export { PopularInputBlogs }