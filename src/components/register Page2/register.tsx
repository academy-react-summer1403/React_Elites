import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import  styleLogin  from "../../Style/list.module.css";
import { NavLink } from "react-router-dom";

const RegisterPage2 = () => {

  return (
    
        <Formik initialValues={{password: "", address: "", rememberPass: ""}}>
          {(form) => (
            <div className='flex justify-center'>
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
                    <h1 className="text-black font-bold text-3xl ">شروع یک ماجراجویی</h1>
                    <h1 className="mt-2 text-base items-right text-gray-500 font-semibold">هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر</h1>
                  </div>
                  <div className="flex w-full mt-64 mb-40 justify-center">
                    <img className='w-96 h-80  flex rounded-2xl' src="https://www.figma.com/file/DFWKDvBB5J1oVrvpxRyFK2/image/063a86db2252b8c9c38fc789bcd1287b9320cb98"></img>
                  </div>
                </div>
                <div className="w-387 relative"> 
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
                        <h1 className="text-black text-2xl font-bold m-4">تایید کد ارسال شده </h1>
                        <p className="text-gray-400 text-sm font-semibold">لطفا کد ارسال شده به شماره همراه 09381235486 را وارد کنید</p>
                      </div>
                      <div className="h-full max-w-96 mx-0 text-right">
                        <label className="text-base font-bold text-black pb-3">کد تایید </label>
                        <Field className="w-full text-right h-11 pr-3 mb-5 mt-4 bg-white text-black border border-solid border-black-800 rounded-3xl text-black" name="adress" placeholder="کد تایید خود را وارد کنید" />
                        <ErrorMessage name="adress" component={"p"} className="error"/>
                      </div>
                      <div className="h-11 max-w-96 overflow-hidden mt-4">
                        <button className="h-full w-1/2 border-non cursor-pointer rounded-full text-blue-700 bg-slate-100 text-xs font-bold tracking-tight" type="submit">ارسال مجدد کد تایید 01:00</button>
                      </div>
                      <NavLink to="/Register-Page3" className="flex h-11 max-w-96 overflow-hidden mt-4">
                        <button className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-bold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">تایید</button>
                      </NavLink>
                      <div className="flex max-w-96  justify-center mt-8">
                        <div className="mt-2 flex rounded-full justify-center gap-1.5 w-36 px-4 py-2 bg-slate-100">
                        <NavLink to="/Register" className="border-non cursor-pointer text-blue-700 text-sm font-bold tracking-tight"> بازگشت &gt; </NavLink>
                        </div>
                      </div>
                  </Form>
                </div>
              </div>
            </div>
          )}
        </Formik>

  )
}

export { RegisterPage2 }