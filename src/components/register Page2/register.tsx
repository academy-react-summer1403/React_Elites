import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import  styleLogin  from "../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { verifyMessageAPI } from "../../core/services/api/auth-register-verifymessage";
import { useGlobalState } from "../../State/State";

const RegisterPage2 = () => {
  const [phoneNumber, setPhoneNumber] = useGlobalState('phoneNumber');

  const verifyMessage = async (values) => {
    const user = await verifyMessageAPI({values, phoneNumber});
    console.log(user);
    console.log(phoneNumber)
  }

  return (
    
        <Formik 
          initialValues={{ verifyCode: ""}}
          onSubmit={(values) => verifyMessage(values)}
          >
          {(form) => (
                  <Form className={styleLogin.form}>
                  <div className={styleLogin.navigate}>
                        <div className="w-1/3 flex flex-wrap h-full w-64 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-blue-500 opacity-500">  </div>
                          <h1 className={styleLogin.textNavigate}>وارد کردن شماره تلفن </h1>
                        </div>
                        <div className="w-1/3 flex flex-wrap h-full w-64 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-blue-600">  </div>
                          <h1 className={`${styleLogin.textNavigate} ${styleLogin.selectedNavigate}`}>تایید کد ارسال شده </h1>
                        </div>
                        <div className="w-1/3 flex flex-wrap h-full w-64 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
                          <h1 className={styleLogin.textNavigate}>واردکردن اطلاعات شخصی </h1>
                        </div>
                      </div>
                      <div className="h-full max-w-96 my-8 mx-0">
                        <h1 className="text-black text-2xl font-DannaBold m-4">تایید کد ارسال شده </h1>
                        <p className="text-gray-400 text-sm font-DannaDemiBoldiBoldiBold">لطفا کد ارسال شده به شماره همراه 09381235486 را وارد کنید</p>
                      </div>
                      <div className="h-full max-w-96 mx-0 text-right">
                        <label className="text-base font-DannaBold text-black pb-3">کد تایید </label>
                        <Field className="w-full text-right h-11 pr-3 mb-5 mt-4 bg-white text-black border border-solid border-black-800 rounded-3xl text-black" name="verifyCode" placeholder="کد تایید خود را وارد کنید" />
                        <ErrorMessage name="verifyCode" component={"p"} className="error"/>
                      </div>
                      <div className="h-11 max-w-96 overflow-hidden mt-4">
                        <button className="h-full w-1/2 border-non cursor-pointer rounded-full text-blue-700 bg-slate-100 text-xs font-DannaBold tracking-tight" type="submit">ارسال مجدد کد تایید 01:00</button>
                      </div>
                      <div className="flex h-11 max-w-96 overflow-hidden mt-4">
                        <button className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">تایید</button>
                      </div>
                      <div className="flex max-w-96  justify-center mt-8">
                        <div className="mt-2 flex rounded-full justify-center gap-1.5 w-36 px-4 py-2 bg-slate-100">
                        <NavLink to="/Register" className="border-non cursor-pointer text-blue-700 text-sm font-DannaBold tracking-tight"> بازگشت &gt; </NavLink>
                        </div>
                      </div>
                  </Form>
          )}
        </Formik>

  )
}

export { RegisterPage2 }