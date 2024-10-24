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

const AboutWe = (props) => {

  return (
  <>
    <Formik>
      {(form) => (
        <div className={style.page}>
          <h1 className={style.title}>درباره ما!</h1>
          <div className={style.page2}>
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
      )}
    </Formik>
  </>
  )
}


export { AboutWe }
