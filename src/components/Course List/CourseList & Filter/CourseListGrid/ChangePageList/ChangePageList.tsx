import React from 'react'
import style from '../../../../../Style/blogList.module.css'
import { useGlobalState } from '../../../../../State/State';

const ChangePageList = (props) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.ChangePageList} data-theme={darkMode ? "darkSmall" : "lightMode"}>
        <span className={style.toLeft}></span>
          <input type='radio' name='page' id='page1' className={style.inputChangePage} />
            <label htmlFor='page1' className={style.button}  data-theme={darkMode ? "darkSmall" : "lightMode"}>1</label>
            <input type='radio' name='page' id='page2' className={style.inputChangePage}/>
            <label htmlFor='page2' className={style.button} data-theme={darkMode ? "darkSmall" : "lightMode"}>2</label>
            <input type='radio' name='page' id='page3' className={style.inputChangePage}/>
            <label htmlFor='page3' className={style.button} data-theme={darkMode ? "darkSmall" : "lightMode"}>3</label>
            <input type='radio' name='page' id='page4' className={style.inputChangePage}/>
            <label htmlFor='page4' className={style.button} data-theme={darkMode ? "darkSmall" : "lightMode"}>4</label>
            <input type='radio' name='page' id='page5' className={style.inputChangePage}/>
            <label htmlFor='page5' className={style.button} data-theme={darkMode ? "darkSmall" : "lightMode"}>5</label>
        <span className={style.toRight}></span>
    </div>
  )
}

export {ChangePageList}