import styleBlogList from '../../../../Style/blogList.module.css'
import { useGlobalState } from "../../../../State/State.tsx";

const NewInputBlogs = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <>
      <input type="radio" checked name="sort" id="New" className={styleBlogList.inputSort} />
      <label htmlFor="New" className={styleBlogList.sortButtonLabel} data-theme={darkMode ? "darkSmall" : "lightMode"}> جدیدترین </label>
    </>
  )
}

export { NewInputBlogs }