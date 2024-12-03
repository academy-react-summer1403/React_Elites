import { Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import s from '../../../../../../studentPanel/dashboard/Items/MyReserveAndComment/modal.module.css'
import style from '../SeachModal.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { CardModal } from '../Card';
import { getAllBlogsListSearch } from '../../../../../../../core/services/api/AllBlogsListSearch';
import { allCourseListSearch } from '../../../../../../../core/services/api/AllCourseListSearch';

const SearchModal = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applyFilter, setApplyFilter] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isBlog, setisBlog] = useGlobalState('isBlog');
  const [applySort, setapplySort] = useState(false)
  const [courseList, setCourseList] = useState([]);
  const [blogsList, setBlogsList] = useState([]);
  const [isLoading, setisLoading] = useState(true)
  const [pagInation, setPagInation] = useState(1)

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const allBlogsList = async () => {
    let allBlogs = await getAllBlogsListSearch()
     if (applyFilter === false && applySort === false) {
      setBlogsList(allBlogs.news)
      setBlogsList(allBlogs.news.filter(doc => doc.title.includes(searchValue)))
    }
    setisLoading(false)
  }

  const getFilteredList = async () => {
    const allCourses = await allCourseListSearch(pagInation)
     if(applyFilter === false && applySort === false){
      setisLoading(true)
      setCourseList(allCourses.courseFilterDtos.filter(doc => doc.title.includes(searchValue)))
      setisLoading(false)
    }
  }

  useEffect(() => {
    getFilteredList()
  }, [])
  useEffect(() => {
    getFilteredList()
  }, [pagInation])
  useEffect(() => {
    getFilteredList()
  }, [searchValue])

  useEffect(() => {
    allBlogsList()
  }, [])
  useEffect(() => {
    allBlogsList()
  }, [searchValue])


  return (
    <>
      <div className={style.titleHeaderMyCourseList}>
        <div className={style.SearchHeader} onClick={showModal}> </div>
        <Modal closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className={s.titleHolder}>
            <div className={s.close}> بستن </div>
            <div className={s.blogOrCourse}>
              <div className={isBlog === false ? s.courses : s.selected} onClick={() => setisBlog(true)}> بلاگ ها </div>
              <div className={isBlog === true ? s.courses : s.selected} onClick={() => setisBlog(false)}> دوره ها </div>
            </div>
            <div className={s.title}>: جستجو در </div>
          </div>
          <div className={style.InputSearchHolder}>
            <input placeholder='جستجو کنید' className={style.InputSearchModal} onChange={(e) => {
              setSearchValue(e.target.value)
            }} />
          </div>
          <div className={style.holderCards}>
            {blogsList.map((item, index) => {
              return (
                <CardModal
                  key={index}
                  id={item.id}
                  title={item.title}
                  desc={item.miniDescribe}
                  image={item.currentImageAddressTumb}
                  NavLinkTitle="/Blogs-Detail/"
                  NavTitle="بلاگ"
                />
              )
            })}
          </div>
        </Modal>
        <Modal closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className={s.titleHolder}>
            <div className={s.close}> بستن </div>
            <div className={s.blogOrCourse}>
              <div className={isBlog === false ? s.courses : s.selected} onClick={() => setisBlog(true)}> بلاگ ها </div>
              <div className={isBlog === true ? s.courses : s.selected} onClick={() => setisBlog(false)}> دوره ها </div>
            </div>
            <div className={s.title}>: جستجو در </div>
          </div>
          <div className={style.InputSearchHolder}>
            <input placeholder='جستجو کنید' className={style.InputSearchModal} onChange={(e) => {
              setSearchValue(e.target.value)
            }} />
          </div>
          <div className={style.holderCards}>
            {courseList.map((item, index) => {
              return (
                <CardModal
                  key={index}
                  id={item.courseId}
                  title={item.title}
                  desc={item.describe}
                  image={item.tumbImageAddress}
                  NavLinkTitle="/Course-Detail/"
                  NavTitle="دوره"
                />
              )
            })}
          </div>
        </Modal>
      </div>
    </>
  );
}

export default SearchModal