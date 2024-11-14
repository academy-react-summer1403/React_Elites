import styleBlogList from '../../../../Style/blogList.module.css'
import { useGlobalState } from "../../../../State/State.tsx";

const TitleSortBlogs = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
      <h1 className={styleBlogList.sortingTitle} data-theme={darkMode ? "darkNoBG" : "lightMode"}>ترتیب</h1>
    </>
  )
}

export { TitleSortBlogs }