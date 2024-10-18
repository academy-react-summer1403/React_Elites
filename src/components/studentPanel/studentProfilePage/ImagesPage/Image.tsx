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

const ImageForm = () => {

    return (

        <Formik>
            {(form) => (
                <div className={style.root}>
                    <StudentGhabRight />
                    <div className={style.left}>
                        <StudentGhabLeft />
                        <div className={style.page}>
                            <div className={style.titleHolder}>
                                <h1 className={style.title}>پروفایل من</h1>
                            </div>
                            <div className={styleImage.page2}>
                                <div className={styleInform.rightHolder}>
                                    <div className={styleInform.right}>
                                        <NavLink to="/Information" className={styleInform.pages}>اطلاعات حساب کاربری </NavLink>
                                        <div><h1 className={styleImage.selected}>عکس ها </h1></div>
                                        <NavLink to="/Location" className={styleInform.pages}>محل سکونت </NavLink>
                                        <NavLink to='/Link' className={styleInform.pages}>لینک ها </NavLink>
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
                    </div>
                </div>
            )}
        </Formik>

    )
}

export { ImageForm }