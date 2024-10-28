import React, { useEffect } from 'react'
import style from '../../../../../Style/blogList.module.css'
import { useGlobalState } from '../../../../../State/State';

const ChangePageList = ({setPagInation, pagInation, totalCount}) => {
  const [darkMode] = useGlobalState('DarkMode');

  const toNextPage = () => {
    if(pagInation > Math.ceil(totalCount/12)){
      setPagInation(1)
    }
    else{
      setPagInation(pagInation++);
    }
  }
  const toPreviousPage = () => {
    if(pagInation < 1){
      setPagInation(Math.ceil(totalCount/12))
    }
    else{
      setPagInation(pagInation--);
    }
  }

  const syncPageList = (N) => {
    var newArr = [];
    for (let i = 1; i <= N; i++) {
      newArr.push(i);
    }
    return newArr
  }

  let totalCountCourses = Math.ceil(totalCount/12)

  useEffect(() => {
    syncPageList(totalCountCourses)
  }, [totalCount])
  

  return (
    <div className={style.ChangePageList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <span className={style.toLeft} onClick={toPreviousPage}></span>
          {syncPageList(totalCountCourses).map((index, item) => {
            return(
              <div key={index} className={pagInation == index ? style.selected : style.button} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
                setPagInation(index)
              }}>{index}</div>
            )
          })}
        <span className={style.toRight} onClick={toNextPage}></span>
    </div>
  )
}

export {ChangePageList}