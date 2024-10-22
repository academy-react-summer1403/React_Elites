import { Formik  } from "formik";
import styleBlogList from "./../../Style/blogList.module.css";
import { Filter } from "./filter/filter.tsx";
import { ListCardBlogs } from "./blogsListGrid/index/cardsBlogsList.tsx";
import { ChangePageList } from "./ChangePageList/ChangePageList.tsx";
import { useState } from "react";
import { FilterModal } from "./Filter Modal/FilterModal.tsx";
import { SortModal } from "./Sort Modal/SortModal.tsx";
import { useGlobalState } from "../../State/State.tsx";

const BlogsList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [filterModal, setFilterModal] = useState(false)
  const [sortModal, setSortModal] = useState(false)
  return (
  <>
    <Formik>
      {(form) => (
        <div className=' h-full w-full flex flex-wrap justify-center' data-theme={darkMode ? "dark" : "lightMode"}>
          <div className={styleBlogList.titleBlogs}>
            <h1 className={styleBlogList.h1} data-theme={darkMode ? "dark" : "lightMode"}>اطلاعات بیشتر ، درک بهتر</h1>
            <p className={styleBlogList.p} data-theme={darkMode ? "dark" : "lightMode"}>ما در بلاگ ها اطلاعات شما رو نسبت به تکنولوژی ای که یاد میگیرید بیشتر میکنیم</p>
          </div>
          <div className={styleBlogList.page}>
            <Filter />            
            <div className={styleBlogList.page2}>
              <div className={styleBlogList.sortsAndFilter}>
                <div className={styleBlogList.sortButton} data-theme={darkMode ? "dark" : "lightMode"}> ترتیب </div>
                <div className={styleBlogList.filterButton} data-theme={darkMode ? "dark" : "lightMode"}>فیلتر</div>
              </div>
              <div className={styleBlogList.sorts}>
                <h1 className={styleBlogList.sortingTitle} data-theme={darkMode ? "darkNoBG" : "lightMode"}>ترتیب</h1>


                <input type="radio" checked name="sort" id="New" className={styleBlogList.inputSort} />
                <label htmlFor="New" className={styleBlogList.sortButtonLabel} data-theme={darkMode ? "darkSmall" : "lightMode"}> جدیدترین </label>



                <input type="radio" name="sort" id="Popular" className={styleBlogList.inputSort} />
                <label htmlFor="Popular" className={styleBlogList.sortButtonLabel} data-theme={darkMode ? "darkSmall" : "lightMode"}> محبوبترین </label>

                <div className={styleBlogList.filterResponsive} onClick={() => {
                  if(filterModal == false){
                    setFilterModal(true)
                  }
                  else if(filterModal == true){
                    setFilterModal(false)
                  }
                }}>فیلتر</div>
                { filterModal && <FilterModal setFilterModal={setFilterModal} />}
                <div className={styleBlogList.sortResponsive} onClick={() => {
                  if(sortModal == false){
                    setSortModal(true)
                  }
                  else if(sortModal == true){
                    setSortModal(false)
                  }
                }}>ترتیب</div>
                { sortModal && <SortModal setSortModal={setSortModal} /> }
              </div>
              <ListCardBlogs />
              <ChangePageList />
            </div>
          </div>
          
        </div>
      )}
    </Formik>
  </>
  )
}

export { BlogsList }
