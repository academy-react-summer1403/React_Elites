import { Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import s from '../../../../../../studentPanel/dashboard/Items/MyReserveAndComment/modal.module.css'
import style from '../SeachModal.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { CardModal } from '../Card';
import { getAllBlogsListSearch } from '../../../../../../../core/services/api/AllBlogsListSearch';
import { allCourseListSearch } from '../../../../../../../core/services/api/AllCourseListSearch';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const SearchModal = ({hideBlog}) => {
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
  const { t } = useTranslation();

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
    if (applyFilter === false && applySort === false) {
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
        <div data-theme={identifier("darkSearch")} className={style.SearchHeader} onClick={showModal}> </div>
        <div id='Modal1Search'>
          <Modal closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{ overflow: "scroll", height: "600px", background: "none", padding: "0" }}>
            <div data-theme={identifier("dark")} className={s.titleHolder}>
              <div className={s.close}> {t("close")} </div>
              <div className={s.blogOrCourse}>
                <div className={isBlog === false ? s.courses : s.selected} onClick={() => setisBlog(true)}> بلاگ ها </div>
                <div className={isBlog === true ? s.courses : s.selected} onClick={() => setisBlog(false)}> دوره ها </div>
              </div>
              <div data-theme={identifier("darkNoBG")} className={s.title}>: جستجو در </div>
            </div>
            <div data-theme={identifier("dark")} className={style.InputSearchHolder}>
              <input data-theme={identifier("darkSmall")} placeholder=' جستجو کنید' className={style.InputSearchModal} onChange={(e) => {
                setSearchValue(e.target.value)
              }} />
            </div>
            <div data-theme={identifier("dark")} className={style.holderCards}>
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
        </div>
        <div id='Modal2Search'>
          <Modal className={style.modal} closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{ overflow: "scroll", height: "600px", background: "none" }}>
            <div data-theme={identifier("dark")} className={s.titleHolder}>
              <div className={s.close}> {t("close")} </div>
              <div className={s.blogOrCourse}>
                <div className={isBlog === false ? s.courses : s.selected} onClick={() => setisBlog(true)}> {t("blogs")} </div>
                <div className={isBlog === true ? s.courses : s.selected} onClick={() => setisBlog(false)}> {t("courses")} </div>
              </div>
              <div data-theme={identifier("darkNoBG")} className={s.title}>: {t("search")} </div>
            </div>
            <div data-theme={identifier("dark")} className={style.InputSearchHolder}>
              <input data-theme={identifier("darkSmall")} placeholder={t("ُSearchLandingPlaceHolder")} className={style.InputSearchModal} onChange={(e) => {
                setSearchValue(e.target.value)
              }} />
            </div>
            <div data-theme={identifier("dark")} className={style.holderCards}>
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
      </div>
    </>
  );
}


export default SearchModal