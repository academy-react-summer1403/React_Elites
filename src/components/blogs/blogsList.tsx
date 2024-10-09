import { Formik  } from "formik";
import styleBlogList from "./../../Style/blogList.module.css";
import { Filter } from "./filter/filter.tsx";
import { ListCardBlogs } from "./blogsListGrid/index/cardsBlogsList.tsx";
import { ChangePageList } from "./ChangePageList/ChangePageList.tsx";

const BlogsList = () => {

  return (

    <Formik>
      {(form) => (
        <div className=' h-full w-full flex flex-wrap justify-center'>
          <div className={styleBlogList.titleBlogs}>
            <h1 className={styleBlogList.h1}>اطلاعات بیشتر ، درک بهتر</h1>
            <p className={styleBlogList.p}>ما در بلاگ ها اطلاعات شما رو نسبت به تکنولوژی ای که یاد میگیرید بیشتر میکنیم</p>
          </div>
          <div className={styleBlogList.page}>
            <Filter />            
            <div className={styleBlogList.page2}>
              <div className={styleBlogList.sortsAndFilter}>
                <div className={styleBlogList.sortButton}> ترتیب </div>
                <div className={styleBlogList.filterButton}>فیلتر</div>
              </div>
              <div className={styleBlogList.sorts}>
                <h1 className="w-20 font-bold text-xl text-black">ترتیب</h1>
                <div className={styleBlogList.sortButtonNew}>× جدید ترین </div>
                <div className={styleBlogList.sortButtonPop}>محبوب ترین</div>
              </div>
              <ListCardBlogs />
              <ChangePageList />
            </div>
          </div>
          
        </div>
      )}
    </Formik>

  )
}

export { BlogsList }
