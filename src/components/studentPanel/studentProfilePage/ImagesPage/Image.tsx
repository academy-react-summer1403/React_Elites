import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleImage from "./partImagePage/Image.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../../State/State";
import { getProfile } from "../../../../core/services/api/getProfileInfo";
import { useEffect, useState } from "react";
import { selectImage } from "../../../../core/services/api/postSelectImage";
import toast, { Toaster } from "react-hot-toast";
import { uploadImage } from "../../../../core/services/api/postUserProfile";
import { removeUserProfile } from "../../../../core/services/api/deleteUserProfile";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";
const ImageForm = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [images, setImages] = useState([])
    const [isClicked, setisClicked] = useState(false)
    const [userInfoo, setUserInfoo] = useState()
    const [image, setImage] = useState()
    const [uploaded, setuploaded] = useState(false)
    const [imageChanged, setimageChanged] = useState(false)
    const [sthChanged, setsthChanged] = useGlobalState('sthChangedStu')
    const { t } = useTranslation();

    const getAllImagesCall = async () => {
        const userInfo = await getProfile()
        setImages(userInfo.userImage)
        setUserInfoo(userInfo)
    }

    const postSelectImageCall = async (ImageId) => {
        const onSucces = await selectImage(ImageId)
        if (onSucces.success == true) {
            toast.success("عملیات با موفقیت انجام شد")
        }
        else if(onSucces.success == true){
            toast.error("خطا در انجام عملیات")
        }
        setsthChanged(!sthChanged)
    }

    const onUpload = async (image) => {
        const result = await uploadImage(image)
        if(result.success == true){
            toast.success("عملیات با موفقیت انجام شد")
            setuploaded(!uploaded)
        }
        setisClicked(false)
    }

    useEffect(() => {
        getAllImagesCall()
    }, [])

    useEffect(() => {
        getAllImagesCall()
    }, [uploaded, imageChanged])
    

    return (
            <>
                <Toaster />
                    <div className={style.titleHolder}>
                        <h1 className={style.title} data-theme={identifier("darkNoBG")}>{t("myProfile")}</h1>
                    </div>
                    <div className={styleImage.page2}>
                        <div className={styleInform.rightHolder} data-theme={identifier("darkNoBG")}>
                            <div className={styleInform.right}>
                                <NavLink to="/Student-Panel/Information" className={styleInform.pages} data-theme={identifier("darkNoBG")}>{t("informationAccount")} </NavLink>
                                <div><h1 className={styleImage.selected}>{t("images")} </h1></div>
                                <NavLink to="/Student-Panel/Location" className={styleInform.pages} data-theme={identifier("darkNoBG")}>{t("placeInform")} </NavLink>
                                <NavLink to='/Student-Panel/Link' className={styleInform.pages} data-theme={identifier("darkNoBG")}>{t("links")} </NavLink>
                                <NavLink to="/Student-Panel/changePassword" className={styleInform.pages} data-theme={identifier("darkNoBG")}>{t("ChangePassword")} </NavLink>
                                <NavLink to="/Student-Panel/change-security" className={styleInform.pages} data-theme={identifier("darkNoBG")}> {t("UserSettings")}  </NavLink>   
                            </div>
                        </div>
                        <div className={styleImage.imagesHolder}>
                            <div className={style.header}>
                                <div className={style.uploadImage}  onClick={() => {
                                        setisClicked(!isClicked)
                                    }}> {t("AddPhoto")}
                                    <span className={style.addImage}></span>
                                </div>
                                {isClicked && 
                                <>
                                    <div className={style.overlay}></div>
                                    <div className={styleImage.uploadModule}>
                                        <div className={styleImage.uploadHeader}>
                                            <div className={styleImage.closeBtn} onClick={() => {
                                                setisClicked(!isClicked)
                                            }}></div>
                                        </div>
                                        <img className={styleImage.profile} src={image ? URL.createObjectURL(image) : image} />
                                        <div className={styleImage.holderUploadButton}>
                                        <button className={styleImage.upload} onClick={() => {
                                            const imageData = new FormData();
                                            imageData.append('formFile', image)
                                            onUpload(imageData)
                                        }}> {t("Loading")} </button>
                                        </div>
                                        <div className={styleImage.fileHolder}></div>
                                        <input type="file" id="file" className={styleImage.file} onChange={(e) => setImage(e.target.files[0])} />
                                        <label htmlFor="file" className={styleImage.labelFile}></label>
                                    </div>
                                </>
                                }
                            </div>
                            {
                                images.map((item, index) => {
                                    return (
                                        <div key={index} className={styleImage.holderProfiles} >
                                            <img 
                                                className={styleImage.img} 
                                                src={item.puctureAddress} 
                                                onClick={() => {
                                                setimageChanged(!imageChanged)
                                                postSelectImageCall({ImageId: item.id})
                                            }} />
                                            <span className={styleImage.delete} onClick={async () => {
                                                const data = new FormData();
                                                data.append("DeleteEntityId", item.id);
                                                let res = await removeUserProfile(data)
                                                console.log(res)
                                            }}></span>
                                            {userInfoo.currentPictureAddress == item.puctureAddress && <span className={styleImage.tick}></span> }
                                        </div>
                                    )
                                })
                            }
                        </div>    
                    </div>
            </>
    )
}

export { ImageForm }