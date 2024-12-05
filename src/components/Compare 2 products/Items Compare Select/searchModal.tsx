import { Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import s from '../../studentPanel/dashboard/Items/MyReserveAndComment/modal.module.css'
import style from './SeachModal.module.css'
import { useGlobalState } from '../../../State/State';
import { CardModal } from './Card';
import { allCourseListSearch } from '../../../core/services/api/AllCourseListSearch';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';
const SearchModal = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const [courseList, setCourseList] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getFilteredList = async () => {
    const allCourses = await allCourseListSearch(1)
      setCourseList(allCourses.courseFilterDtos.filter(doc => doc.title.includes(searchValue)))
  }

  useEffect(() => {
    getFilteredList()
  }, [])
  useEffect(() => {
    getFilteredList()
  }, [searchValue])


  return (
    <>
      <div className={style.titleHeaderMyCourseList}>
        <div data-theme={identifier("darkSearch")} className={style.SearchHeader} onClick={showModal}> </div>
        <Modal className={style.modal} closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{overflow: "scroll", height: "600px",background:"none"}}>
          <div data-theme={identifier("dark")} className={s.titleHolder}>
            <div className={s.close}> بستن </div>
            <div className={s.blogOrCourse}>
              <div className={s.courses}> دوره ها </div>
            </div>
            <div data-theme={identifier("darkNoBG")} className={s.title}>: جستجو در </div>
          </div>
          <div data-theme={identifier("dark")} className={style.InputSearchHolder}>
            <input data-theme={identifier("darkSmall")}  placeholder='جستجو کنید' className={style.InputSearchModal} onChange={(e) => {
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
    </>
  );
}

export default SearchModal