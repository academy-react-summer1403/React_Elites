import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { ListCardBlogs } from '../../../studentCurse-Blog/My Courses/Courses Grid/index/CoursesCardsList';
import { TitleHeaderMyCourseList } from './TitleHeaderMyCourseList';
import { HeaderList } from './HeaderList';


const ListMyCoursesDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={style.listMyCoursesDashboard} data-theme={darkMode ? "dark" : "lightMode"}>
      <TitleHeaderMyCourseList />
      <HeaderList />
      <ListCardBlogs />
    </div>
  )
}

export { ListMyCoursesDashboard }