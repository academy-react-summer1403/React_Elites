import React from 'react'
import styleBlogList from '../../../Style/blogList.module.css'
import { SortResBlogList } from "./Items/SortResponsive.tsx";
import { FilterResBlogList } from "./Items/filterResponsive.tsx";
import { PopularInputBlogs } from "./Items/PopularInput.tsx";
import { NewInputBlogs } from "./Items/NewInput.tsx";
import { TitleSortBlogs } from "./Items/TitleSort.tsx";

const SortBlogList = ({ setSortModal, setFilterModal, filterModal, sortModal }) => {
  return (
    <div className={styleBlogList.sorts}>
      <TitleSortBlogs />
      <NewInputBlogs />
      <PopularInputBlogs />
      <FilterResBlogList setFilterModal={setFilterModal} filterModal={filterModal} />
      <SortResBlogList setSortModal={setSortModal} sortModal={sortModal} />
    </div>
  )
}

export { SortBlogList }