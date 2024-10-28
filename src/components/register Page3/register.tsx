import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import  styleLogin  from "../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { registerGmail } from "../../core/services/api/auth-register-gmail";
import { useGlobalState } from "../../State/State";

const RegisterPage3 = () => {
  const [phoneNumber, setPhoneNumber] = useGlobalState('phoneNumber');
  const verifyGmail = async (values) => {
    const user = await registerGmail({phoneNumber, values});
    console.log(user);
  }

  return (
    
        <Formik initialValues={{password: "", gmail: ""}}
        onSubmit={(values) => verifyGmail(values)}>
          {(form) => (
            <div className={styleLogin.main}>
              <div className={styleLogin.page}>
                <div className={styleLogin.page2}>  
                  <div className='flex justify-end items-right w-full'>
                    <div className='w-44 h-10 scale-250 items-right relative overflow-hidden object-fill rounded-2xl'>
                      <img className='bottom-2 absolute' src="https://www.figma.com/file/DFWKDvBB5J1oVrvpxRyFK2/image/89782e651551396a2baebe523401d4b33d0ab02a"></img>
                    </div>
                    <div className='w-11 h-10  overflow-hidden object-fill rounded-2xl'>
                      <img src="https://www.figma.com/file/DFWKDvBB5J1oVrvpxRyFK2/image/89782e651551396a2baebe523401d4b33d0ab02a"></img>
                    </div>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-black font-DannaBold text-3xl ">شروع یک ماجراجویی</h1>
                    <h1 className="mt-2 text-base items-right text-gray-500 font-DannaDemiBold">هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر</h1>
                  </div>
                  <div className="flex w-full mt-64 mb-40 justify-center">
                    <img className='w-96 h-80  flex rounded-2xl' src="https://www.figma.com/file/DFWKDvBB5J1oVrvpxRyFK2/image/063a86db2252b8c9c38fc789bcd1287b9320cb98"></img>
                  </div>
                </div>
                <div className={styleLogin.right}> 
                  <Form className={styleLogin.form}>
                  <div className={styleLogin.navigate}>
                        <div className="w-1/3 flex flex-wrap h-full w-64 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-blue-500 opacity-500">  </div>
                          <h1 className={styleLogin.textNavigate}>وارد کردن شماره تلفن </h1>
                        </div>
                        <div className="w-1/3 flex flex-wrap h-full w-64 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-blue-500">  </div>
                          <h1 className={styleLogin.textNavigate}>تایید کد ارسال شده </h1>
                        </div>
                        <div className="w-1/3 flex flex-wrap h-full w-64 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-blue-600">  </div>
                          <h1 className={`${styleLogin.textNavigate} ${styleLogin.selectedNavigate}`}>واردکردن اطلاعات شخصی </h1>
                        </div>
                      </div>
                      <div className="h-full max-w-96 my-8 mx-0">
                        <h1 className="text-black text-2xl font-DannaBold m-4">وارد کردن اطلاعات شخصی </h1>
                        <p className="text-gray-400 text-sm font-DannaDemiBold">لطفا اطلاعات اولیه خواسته شده را وارد کنید</p>
                      </div>
                      <div className="h-full max-w-96 mx-0 text-right">
                        <label className="text-base font-DannaBold text-black pb-3">ایمیل </label>
                        <Field className="w-full text-right h-11 pr-3 mb-5 mt-4 bg-white text-black border border-solid border-black-800 rounded-3xl text-black" name="gmail" placeholder="ایمیل خود را وارد کنید" />
                        <ErrorMessage name="adress" component={"p"} className="error"/>
                      </div>
                      <div className="h-full max-w-96 mx-0 text-right">
                        <label className="text-base font-DannaBold text-black pb-3">رمزعبور جدید </label>
                        <Field className="w-full text-right h-11 pr-3 mb-5 mt-4 bg-white text-black border border-solid border-black-800 rounded-3xl text-black" name="password" placeholder="رمزعبور جدید خود را وارد کنید" />
                        <ErrorMessage name="adress" component={"p"} className="error"/>
                      </div>
                      <div className="h-11 max-w-96 overflow-hidden mt-4">
                        <button className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">تایید </button>
                      </div>
                  </Form>
                </div>
              </div>
            </div>
          )}
        </Formik>

  )
}

export { RegisterPage3 }