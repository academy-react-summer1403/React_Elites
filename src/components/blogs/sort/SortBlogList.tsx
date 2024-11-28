import React, { useState } from 'react'
import styleBlogList from '../../../Style/blogList.module.css'
import { SortResBlogList } from "./Items/SortResponsive.tsx";
import { FilterResBlogList } from "./Items/filterResponsive.tsx";
import { PopularInputBlogs } from "./Items/PopularInput.tsx";
import { NewInputBlogs } from "./Items/NewInput.tsx";
import { TitleSortBlogs } from "./Items/TitleSort.tsx";
import { useGlobalState } from '../../../State/State.tsx';

const SortBlogList = ({ setSortModal, setFilterModal, filterModal, sortModal, setapplySort, setSortType, setCol }) => {
  const [isClicked1, setisClicked1] = useState(false)
  const [isClicked2, setisClicked2] = useState(false)
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleBlogList.sorts}>
      <TitleSortBlogs />
      <NewInputBlogs
        setisClicked1={setisClicked1}
        setisClicked2={setisClicked2}
        isClicked1={isClicked1}
        setapplySort={setapplySort}
        setSortType={setSortType}
        setCol={setCol}
       />
      <PopularInputBlogs
        setisClicked2={setisClicked2}
        setisClicked1={setisClicked1}
        isClicked2={isClicked2}
        setSortType={setSortType}
        setCol={setCol}
       />
        <div data-theme={darkMode ? "darkClearSort" : "lightMode"} className={styleBlogList.clearSort} onClick={() => {
        setisClicked1(false)
        setisClicked2(false)
        setapplySort(false)
      }}>
      </div>
      <FilterResBlogList setFilterModal={setFilterModal} filterModal={filterModal} />
      <SortResBlogList setSortModal={setSortModal} sortModal={sortModal} />
    </div>
  )
}

export { SortBlogList }