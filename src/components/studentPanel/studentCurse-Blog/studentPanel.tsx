import {  Formik  } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import {StudentGhabRight} from "../studentPart/studentRight";
import {StudentGhabLeft} from "../studentPart/studentLeft";
import {StudentPanelSearch} from "../studentPart/studentPanelSearch";
import {ListCardBlogs} from "./blogsListGrid/index/cardsBlogsList";
import {ChangePageList} from "../../blogs/ChangePageList/ChangePageList";


const StudentPanel = () => {

  return (

    <Formik>
      {(form) => (
        <div className={style.root}>
            <StudentGhabRight />
            <div className={style.left}> 
                <StudentGhabLeft />
                <div className={style.page}>           
                    <div className={style.page2}>
                        <div className={style.titleHolder}>
                            <h1 className={style.title}>دوره من</h1>
                        </div>
                        <StudentPanelSearch />
                        <div className={style.list}> 
                          <div className={style.headerList}>
                            <div className={style.imgList}># </div>
                            <div className={style.nameList}>نام </div>
                            <div className={style.teacherList}> مدرس</div>
                            <div className={style.dateStartList} >تاریخ برگزاری </div>
                            <div className={style.dateEndList}>تاریخ اتمام </div>
                            <div className={style.levelList}>سطح </div>
                            <div className={style.eyeList}> </div>
                          </div>
                          <ListCardBlogs />
                          <div className="flex justify-center mt-8">
                            <ChangePageList />
                          </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </Formik>

  )
}

export { StudentPanel }