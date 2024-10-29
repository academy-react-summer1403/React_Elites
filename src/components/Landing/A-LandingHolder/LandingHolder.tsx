import React, { useEffect, useState } from 'react'
import style from './LandingHolder.module.css'
import { ContentLandingHolder } from '../Content Landing/ContentLandingHolder/ContentLandingHolder'
import {getStudentAndTeacherCount} from '../../../core/services/api/StudentAndTeacher.ts'
import toast, { Toaster } from 'react-hot-toast'
import { useGlobalState } from '../../../State/State.tsx'
import { getProfile } from '../../../core/services/api/getProfileInfo.ts'

const LandingHolder = () => {
  const [MAndJ, setMAndJ] = useState([])
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');
  const [isLanding, setisLanding] = useGlobalState('isLanding');

  const getSAndT = async () => {
    const SAndT = await getStudentAndTeacherCount();
    setMAndJ(SAndT)
  }

  // const isLoginOrNot = () => {
  //   if(isLogin === true){
  //     toast.success('ورود با موفقیت انجام شد')
  //   }
  //   else{
  //     return
  //   }
  // }

  const getProfilee = async () => {
    let userInfo = await getProfile()
    setUserInfoObj(userInfo)
  }

  useEffect(() => {
    getSAndT();
    // isLoginOrNot();
    getProfilee();
    setisLanding(true)
  }, [])
  useEffect(() => {
    return () => {
      setisLanding(false)
    }
  }, [])
  

  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  
  return (
    <>
      <Toaster />
        <div className={style.landing} data-theme={darkMode ? "dark" : "light"}>
          <ContentLandingHolder
            MAndJ={MAndJ}
          />
        </div>
    </>
  )
}

export {LandingHolder}