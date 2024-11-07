import { Formik  } from "formik";
import styleBlogList from "./../../Style/blogList.module.css";
import { Filter } from "./filter/filter.tsx";
import { ListCardBlogs } from "./blogsListGrid/index/cardsBlogsList.tsx";
import { useEffect, useState } from "react";
import { SortBlogList } from "./sort/SortBlogList.tsx";
import { TitleHeaderBlogs } from "./Items/TitleHeaderBlogs.tsx";
import { useGlobalState } from "../../State/State.tsx";

const BlogsList = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [filterModal, setFilterModal] = useState(false)
  const [sortModal, setSortModal] = useState(false)

  const [categoryId, setCategoryId] = useState("")
  const [applyFilter, setApplyFilter] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isBlog, setisBlog] = useGlobalState('isBlog');

  useEffect(() => {
    setisBlog(true)
  }, [])

  useEffect(() => {
    return () => {
      setisBlog(false)
    }
  }, [])

  return (
  <>
    <Formik>
      {(form) => (
        <div className=' h-full w-full flex flex-wrap justify-center mt-20' data-theme={darkMode ? "dark" : "lightMode"}>
          <TitleHeaderBlogs />
          <div className={styleBlogList.page}>
            <Filter 
              setCategoryId={setCategoryId}
              setApplyFilter={setApplyFilter}
              categoryId={categoryId}
              applyFilter={applyFilter}
              setSearchValue={setSearchValue}
            />            
            <div className={styleBlogList.page2}>
              <SortBlogList 
                filterModal={filterModal}
                sortModal={sortModal}
                setFilterModal={setFilterModal}
                setSortModal={setSortModal}
              />
              <ListCardBlogs 
                searchValue={searchValue}
                applyFilter={applyFilter}
                categoryId={categoryId}
              />
            </div>
          </div>
        </div>
      )}
    </Formik>
  </>
  )
}

export { BlogsList }
