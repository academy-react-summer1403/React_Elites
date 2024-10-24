import React from 'react'
import style from '../../../../../Style/blogList.module.css'
import { useGlobalState } from '../../../../../State/State';

const ChangePageList = ({setPagInation, pagInation}) => {
  const [darkMode] = useGlobalState('DarkMode');

  const toNextPage = () => {
    if(pagInation > 5){
      setPagInation(1)
    }
    else{
      setPagInation(pagInation++);
    }
  }
  const toPreviousPage = () => {
    if(pagInation < 1){
      setPagInation(5)
    }
    else{
      setPagInation(pagInation--);
    }
  }
  return (
    <div className={style.ChangePageList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <span className={style.toLeft} onClick={toPreviousPage}></span>
          <div className={pagInation == 1 ? style.selected : style.button} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
              setPagInation(1)
          }}>1</div>
          <div className={pagInation == 2 ? style.selected : style.button} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
              setPagInation(2)
          }}>2</div>
          <div className={pagInation == 3 ? style.selected : style.button} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
              setPagInation(3)
          }}>3</div>
          <div className={pagInation == 4 ? style.selected : style.button} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
              setPagInation(4)
          }}>4</div>
          <div className={pagInation == 5 ? style.selected : style.button} data-theme={darkMode ? "darkSmall" : "lightMode"} onClick={() => {
              setPagInation(5)
          }}>5</div>
        <span className={style.toRight} onClick={toNextPage}></span>
    </div>
  )
}

export {ChangePageList}