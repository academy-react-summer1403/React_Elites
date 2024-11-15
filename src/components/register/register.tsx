import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import  styleLogin  from "../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { registerPhoneNumber } from "../../core/services/api/auth-register-phonenumber";
import toast, { Toaster } from 'react-hot-toast';
import { RegisterPage2 } from "../register Page2/register";
import { useGlobalState } from "../../State/State";
import { useTranslation } from 'react-i18next';

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useGlobalState('phoneNumber');
  const { t } = useTranslation();

  const Register_User_PhoneNumber = async (values) => {
    const phoneNumb = await registerPhoneNumber(values)
    console.log(phoneNumb)
  }

  return (
    
        <Formik 
          initialValues={{phoneNumber: ""}}
          onSubmit={(values) => Register_User_PhoneNumber(values)}
        >
          {(form) => (
                  <Form className={styleLogin.form}>
                  <div className={`${styleLogin.navigate} ${styleLogin.navigateRegister}`}>
                        <div className="flex flex-wrap h-full bg-blue w-60">
                          <div className="w-full h-2 rounded-lg black bg-blue-600">  </div>
                          <h1 className={`${styleLogin.textNavigate} ${styleLogin.selectedNavigate}`}>{t("enterPhoneNumberReg")} </h1>
                        </div>
                        <div className="flex flex-wrap h-full w-60 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
                          <h1 className={styleLogin.textNavigate}>{t("confirmCodeRegister")} </h1>
                        </div>
                        <div className="flex flex-wrap h-full w-60 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
                          <h1 className={styleLogin.textNavigate}>{t("enterInformationRegister")} </h1>
                        </div>
                      </div>
                      <div className="h-full max-w-96 mb-8 mt-20">
                        <h1 className="text-black text-2xl font-DannaBold mt-4 mb-4">{t("welcome")} </h1>
                        <p className="text-gray-400 text-sm font-DannaDemiBold">{t("registerHeaderDesc")}</p>
                      </div>
                      <div className="h-full mt-8 max-w-96 mx-0 text-right">
                        <label className="text-base font-DannaBold text-black pb-3"> {t("PhoneNumberReg")}</label>
                        <Field className="w-full text-right h-11 pr-3 mb-5 mb-4 bg-white text-black border border-solid border-black-800 rounded-3xl text-black" name="phoneNumber" placeholder={t("enterNumberReg")} />
                        <ErrorMessage name="phoneNumber" component={"p"} className="error"/>
                    </div>
                    
                    
                      <div className="flex h-11 max-w-96 overflow-hidden mt-4">
                        <button className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">{t("sendCodeRegister")}</button>
                      </div>
                      <div className="mt-2 max-w-96 flex justify-center gap-1.5">
                        <h1 className="red text-black text-sm font-DannaExtraBold ">{t("haveAccount")}</h1>
                        <NavLink className="border-none cursor-pointer text-blue-700 text-sm font-DannaBold tracking-tight underline" to="/Auth/Login"> {t("loginAccount")}</NavLink>
                      </div>
                      <div className="flex max-w-96  justify-center mt-8">
                        <div className={styleLogin.HomePageButton}>
                          <NavLink to="/" className="border-non  cursor-pointer text-blue-700 text-sm font-DannaBold tracking-tight"> {t("MainPage")} </NavLink>
                          <img src="https://img.icons8.com/?size=64&id=Gc9qmZNN9yFN&format=png" className="w-5 text-black text-sm font-DannaExtraBold "></img>
                        </div>
                      </div>
                  </Form>
          )}
        </Formik>

  )
}

export { Register }