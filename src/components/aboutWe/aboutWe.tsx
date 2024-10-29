import { Formik, Form, Field } from "formik";
import style from "./../../Style/aboutWe.module.css";
import {AboutWeDesc} from "./aboutWeItems/aboutWe.tsx";
import {TargetWe} from "./aboutWeItems/TargetWe.tsx";
import {Teaching} from "./aboutWeItems/teaching.tsx";
import {TeamTeaching} from "./aboutWeItems/team teaching.tsx";
import {CursesTeaching} from "./aboutWeItems/CursesTeaching.tsx";
import {Learning} from "./aboutWeItems/Learning.tsx";
import {LearningWorld} from "./aboutWeItems/LearningWorld.tsx";
import {Programming} from "./aboutWeItems/Programming.tsx";
import { useGlobalState } from "../../State/State.tsx";
import { useEffect } from "react";

const AboutWe = (props) => {
  const [isAboutUs, setisAboutUs] = useGlobalState('isAboutUs');
  const [darkMode, ] = useGlobalState('DarkMode');
  useEffect(() => {
    setisAboutUs(true)
  }, [])
  useEffect(() => {
    return () => {
      setisAboutUs(false)
    }
  }, [])
  
  return (
  <>
    <Formik>
      {(form) => (
        <div className={style.container} data-theme={darkMode ? "dark" : "lightMode"}>
          <div className={style.page} data-theme={darkMode ? "dark" : "lightMode"}>
          <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>درباره ما!</h1>
          <div className={style.page2} data-theme={darkMode ? "dark" : "lightMode"}>
            <AboutWeDesc />
            <TargetWe />
            <Teaching />
            <TeamTeaching />
            <CursesTeaching />
            <Learning />
            <LearningWorld />
            <Programming />
          </div>  
        </div>
        </div>
      )}
    </Formik>
  </>
  )
}


export { AboutWe }
