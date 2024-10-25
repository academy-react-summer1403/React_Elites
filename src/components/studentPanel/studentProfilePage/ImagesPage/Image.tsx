import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleImage from "./partImagePage/Image.module.css";
import { StudentGhabRight } from "../../studentPart/studentRight";
import { StudentGhabLeft } from "../../studentPart/studentLeft";
import image1 from "../../../../assets/Images/profile1.png";
import image2 from "../../../../assets/Images/profile2.png";
import image3 from "../../../../assets/Images/profile3.png";
import image4 from "../../../../assets/Images/profile4.png";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../State/State";

const ImageForm = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (

        <Formik>
            {(form) => (
                <div className={style.page} data-theme={darkMode ? "darkSmall" : "lightMode"}>
                    <div className={style.titleHolder}>
                        <h1 className={style.title} data-theme={darkMode ? "darkNoBG" : "lightMode"}>پروفایل من</h1>
                    </div>
                    <div className={styleImage.page2}>
                        <div className={styleInform.rightHolder} data-theme={darkMode ? "darkNoBG" : "lightMode"}>
                            <div className={styleInform.right}>
                                <NavLink to="/Student-Panel/Information" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>اطلاعات حساب کاربری </NavLink>
                                <div><h1 className={styleImage.selected}>عکس ها </h1></div>
                                <NavLink to="/Student-Panel/Location" className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>محل سکونت </NavLink>
                                <NavLink to='/Student-Panel/Link' className={styleInform.pages} data-theme={darkMode ? "darkNoBG" : "lightMode"}>لینک ها </NavLink>
                            </div>
                        </div>
                        <div className={styleImage.imagesHolder}>
                            <img className={styleImage.img} src={image1} />
                            <img className={styleImage.img} src={image2} />
                            <img className={styleImage.img} src={image3} />
                            <img className={styleImage.img} src={image4} />
                        </div>    
                    </div>
                </div>
            )}
        </Formik>

    )
}

export { ImageForm }