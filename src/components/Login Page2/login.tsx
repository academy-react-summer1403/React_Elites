import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import  styleLogin  from "../../Style/list.module.css";
import { NavLink } from "react-router-dom";

const LoginPage2 = () => {

  return (
    
        <Formik initialValues={{password: "", address: "", rememberPass: ""} }>
          {(form) => (
                  <Form className={styleLogin.form}>
                    <div className={styleLogin.navigate}>
                      <div className="w-72 flex flex-wrap h-full">
                        <div className={styleLogin.lastNavigate}>  </div>
                        <h1 className="w-full align-right text-gray-400 text-base font-DannaMedium tracking-tight mt-3">وارد کردن شماره همراه </h1>
                      </div>
                      <div className="w-72 h-full flex flex-wrap">
                        <div className="w-full h-2 rounded-lg bg-blue-500">  </div>
                        <h1 className="w-full items-right text-black text-base font-DannaMedium tracking-tight mt-3">تایید کد ارسال شده دو مرحله ای </h1>
                        <h1 className="w-full items-right text-black text-sm font-DannaMedium tracking-tight">(درصورت فعال بودن دو مرحله ای) </h1>
                      </div>
                    </div>
                      <div className="h-full max-w-96 my-8 mx-0 mt-20">
                        <h1 className="text-black text-2xl font-DannaDemiBold mt-4 mb-4">تایید کد دو مرحله‌ای!</h1>
                        <p className="text-gray-400 text-sm font-DannaMedium"> کد دومرحله‌ای به شماره همراه شما ارسال شد لطفا کد را<br /> وارد کنید</p>
                      </div>
                      <div className="h-full max-w-96  my-4 mx-0 text-right">
                        <label className="text-base font-DannaDemiBold text-black pb-1.5">کد دو مرحله‌ای</label>
                        <Field className="w-full text-sm font-DannaMedium text-right h-11 pr-3 mt-4 bg-white text-black border border-solid border-black-800 rounded-3xl text-black" name="forgetPassPage2" placeholder="کد دو مرحله‌ای خود را وارد کنید" />
                        <ErrorMessage name="password" component={"p"} className="error"/>
                      </div>
                    
                      <NavLink to="/" className="h-11 max-w-96 overflow-hidden flex">
                        <button  className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">ورود به حساب</button>
                      </NavLink>
                      <div className="flex max-w-96  justify-center mt-4">
                        <div className=" flex rounded-full justify-center gap-1.5 w-28 px-4 py-2 bg-white border border-px border-gray-300">
                          <NavLink to="/Forget-Password" className="border-non cursor-pointer text-blue-700 text-sm font-DannaMedium tracking-tight"> بازگشت </NavLink>
                        </div>
                      </div>
                  </Form>
          )}
        </Formik>

  )
}

export { LoginPage2 }