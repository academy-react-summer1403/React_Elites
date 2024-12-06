import React, { useState } from "react";
import style from "./LangButton.module.css";
import { useGlobalState } from "../../../State/State";

  const EditTheme = () => { 
    const [isClicked, setisClicked] = useState(false)
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [darkMode2, setDarkMode2] = useGlobalState('DarkMode2');
    const [GreenMode, setGreenMode] = useGlobalState('GreenMode');

  return (
    <div className={style.pencil} onClick={() => setisClicked(!isClicked)}>
        {isClicked && <div className={style.holderPalette}>
            <div className={style.theme1}></div>
            <div className={style.theme2} onClick={() => setGreenMode(!GreenMode)}></div>
            <div className={style.theme3}></div>
            <div className={style.theme4}></div>
            <div className={style.theme5} onClick={() => setDarkMode2(!darkMode2)}></div>
            <div className={style.theme6} onClick={() => setDarkMode(!darkMode)}></div>
        </div>}
    </div>
  )
  }

export default EditTheme;