import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleImage from "./partImagePage/Image.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../State/State";
import { getProfile } from "../../../../core/services/api/getProfileInfo";
import { useEffect, useState } from "react";
import { selectImage } from "../../../../core/services/api/postSelectImage";
import { formToJSON } from "axios";
import toast, { Toaster } from "react-hot-toast";

const ImageForm = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [images, setImages] = useState([])


    const getAllImagesCall = async () => {
        const userInfo = await getProfile()
        setImages(userInfo.userImage)
    }

    const postSelectImageCall = async (ImageId) => {
        const onSucces = await selectImage(ImageId)
        if (onSucces.success == true) {
            toast.success("عملیات با موفقیت انجام شد")
        }
        else if(onSucces.success == true){
            toast.error("خطا در انجام عملیات")
        }
    }

    useEffect(() => {
        getAllImagesCall()
    }, [])
    

    return (

        <Formik>
            {(form) => (
                <>
                <Toaster />
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
                            <div className={style.header}>
                                <div className={style.uploadImage}> اضافه کردن عکس 
                                    <span className={style.addImage}></span>
                                </div>
                            </div>
                            {
                                images.map((item, index) => {
                                    return (
                                        <img 
                                            key={index} 
                                            className={styleImage.img} 
                                            src={item.puctureAddress} 
                                            onClick={() => {
                                            postSelectImageCall({ImageId: item.id})
                                        }} />
                                    )
                                })
                            }
                        </div>    
                    </div>
                </>
            )}
        </Formik>

    )
}

export { ImageForm }