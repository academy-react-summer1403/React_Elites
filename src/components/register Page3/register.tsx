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
          )}
        </Formik>

  )
}

export { RegisterPage3 }