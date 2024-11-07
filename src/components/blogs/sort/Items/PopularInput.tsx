import styleBlogList from '../../../../Style/blogList.module.css'
import { useGlobalState } from "../../../../State/State.tsx";

const PopularInputBlogs = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
      <input type="radio" name="sort" id="Popular" className={styleBlogList.inputSort} />
      <label htmlFor="Popular" className={styleBlogList.sortButtonLabel} data-theme={darkMode ? "darkSmall" : "lightMode"}> محبوبترین </label>
    </>
  )
}

export { PopularInputBlogs }