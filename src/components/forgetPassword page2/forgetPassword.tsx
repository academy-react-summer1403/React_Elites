import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import  styleLogin  from "../../Style/list.module.css";
import { NavLink } from "react-router-dom";

const ForgetPassPage2 = () => {

  return (
    
        <Formik initialValues={{password: "", address: "", rememberPass: ""} }>
          {(form) => (
                  <Form className={styleLogin.form}>
                      <div className={styleLogin.navigate}>
                        <div className="w-1/2 flex flex-wrap h-full w-64 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
                          <h1 className="w-full align-right text-gray-400 text-sm font-DannaDemiBold tracking-tight">وارد کردن ایمیل </h1>
                        </div>
                        <div className="w-1/2 h-full flex flex-wrap w-64 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-blue-500 ">  </div>
                          <h1 className="w-full items-right text-black text-sm font-DannaDemiBold tracking-tight">تایید کد ارسال شده دو مرحله ای </h1>
                          <h1 className="w-full items-right text-black text-xs font-DannaBold tracking-tight">(درصورت فعال بودن دو مرحله ای) </h1>
                        </div>
                      </div>
                      <div className="h-full max-w-96 my-8 mx-0">
                        <h1 className="text-black text-2xl font-DannaBold mt-4 mb-4">رمزعبور جدید!</h1>
                        <p className="text-gray-400 text-sm font-DannaDemiBold">رمزعبور جدید خود را وارد کنید</p>
                      </div>
                      <div className="h-full max-w-96  my-4 mx-0 text-right">
                        <label className="text-base font-DannaBold text-black pb-1.5">رمزعبور جدید</label>
                        <Field className="w-full text-right h-11 pr-3 mt-4 bg-white text-black border border-solid border-black-800 rounded-3xl text-black" name="password" placeholder="رمزعبور خود را وارد کنید" />
                        <ErrorMessage name="password" component={"p"} className="error"/>
                      </div>
                      <div className="h-full max-w-96  my-4 mx-0 text-right">
                        <label className="text-base font-DannaBold text-black pb-1.5">تکرار رمزعبور جدید</label>
                        <Field className="w-full text-right h-11 pr-3 mt-4 bg-white text-black border border-solid border-black-800 rounded-3xl text-black" name="password" placeholder="تکرار رمزعبور خود را وارد کنید" />
                        <ErrorMessage name="password" component={"p"} className="error"/>
                      </div>
                      <NavLink to="/" className="h-11 max-w-96 overflow-hidden flex">
                        <button  className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">تایید رمزعبور</button>
                      </NavLink>
                      <div className="flex max-w-96  justify-center mt-4">
                        <div className=" flex rounded-full justify-center gap-1.5 w-28 px-4 py-2 bg-white border border-px border-gray-300">
                          <NavLink to="/Auth/Forget-Password" className="border-non cursor-pointer text-blue-700 text-sm font-DannaBold tracking-tight"> بازگشت &gt; </NavLink>
                        </div>
                      </div>
                  </Form>
          )}
        </Formik>

  )
}

export { ForgetPassPage2 }