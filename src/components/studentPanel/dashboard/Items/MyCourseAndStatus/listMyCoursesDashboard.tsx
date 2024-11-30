import style from "./../../../../../Style/studentPanel.module.css";
import { useGlobalState } from "../../../../../State/State";
import { ListCardBlogs } from '../../../studentCurse-Blog/My Courses/Courses Grid/index/CoursesCardsList';
import { TitleHeaderMyCourseList } from './TitleHeaderMyCourseList';
import { HeaderList } from './HeaderList';
import { useEffect, useState } from "react";
import { getMyCourse } from "../../../../../core/services/api/getMyCourse";


const ListMyCoursesDashboard = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [data, setdata] = useState([])
  const myCourses = async () => {
    let res = await getMyCourse()
    setdata(res.listOfMyCourses)
  }
  useEffect(() => {
    myCourses()
  }, [])
  return (

    <div className={style.listMyCoursesDashboard} data-theme={darkMode ? "dark" : "lightMode"}>
      <TitleHeaderMyCourseList />
      <HeaderList />
      <ListCardBlogs data={data} />
    </div>
  )
}

export { ListMyCoursesDashboard }