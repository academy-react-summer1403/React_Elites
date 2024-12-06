import React, { useState } from "react";
import style from "./LangButton.module.css";
import { useGlobalState } from "../../../State/State";

  const EditTheme = () => { 
    const [isClicked, setisClicked] = useState(false)
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [darkMode2, setDarkMode2] = useGlobalState('DarkMode2');
    const [greenMode, setGreenMode] = useGlobalState('GreenMode');
    const [pinkMode, setPinkMode] = useGlobalState('PinkMode');
    const [blueMode, setBlueMode] = useGlobalState('BlueMode');
    const [redMode, setRedMode] = useGlobalState('RedMode');
    

  return (
    <div className={style.pencil} onClick={() => setisClicked(!isClicked)}>
        {isClicked && <div className={style.holderPalette}>
            <div className={style.theme1} onClick={() => setPinkMode(!pinkMode)}></div>
            <div className={style.theme2} onClick={() => setGreenMode(!greenMode)}></div>
            <div className={style.theme3} onClick={() => setBlueMode(!blueMode)}></div>
            <div className={style.theme4} onClick={() => setRedMode(!redMode)}></div>
            <div className={style.theme5} onClick={() => setDarkMode2(!darkMode2)}></div>
            <div className={style.theme6} onClick={() => setDarkMode(!darkMode)}></div>
        </div>}
    </div>
  )
  }

export default EditTheme;