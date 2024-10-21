import { Formik, Form, Field, ErrorMessage } from "formik";
import  styleLogin  from "../../Style/list.module.css";
import { NavLink } from "react-router-dom";

const Login = () => {

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
                        <div className="w-1/2 flex flex-wrap h-full w-64 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-blue-500">  </div>
                          <h1 className="w-full align-right text-black text-sm font-semibold tracking-tight">وارد کردن شماره تلفن </h1>
                        </div>
                        <div className="w-1/2 h-full flex flex-wrap w-64 bg-blue">
                          <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
                          <h1 className="w-full items-right text-gray-400 text-sm font-semibold tracking-tight">تایید کد ارسال شده دو مرحله ای </h1>
                          <h1 className="w-full items-right text-gray-400 text-xs font-bold tracking-tight">(درصورت فعال بودن دو مرحله ای) </h1>
                        </div>
                      </div>
                      <div className="h-full max-w-96 my-8 mx-0">
                        <h1 className="text-black text-2xl font-DannaDemiBold m-4">خوش برگشتی!</h1>
                        <p className="text-gray-400 text-sm font-semibold">لطفا شماره همراه یا ایمیل و رمز عبور را برای ورود<br /> به حساب کاربری وارد کنید</p>
                      </div>
                      <div className="h-full max-w-96 mx-0 text-right">
                        <label className="text-base font-bold text-black pb-3">شماره همراه یا ایمیل </label>
                        <Field className="w-full text-right h-11 pr-3 mt-4 bg-white text-black border border-solid border-black-800 rounded-3xl text-black" name="adress" placeholder="شماره همراه یا ایمیل خود را وارد کنید" />
                        <ErrorMessage name="adress" component={"p"} className="error"/>
                      </div>
                      <div className="h-full max-w-96  my-4 mx-0 text-right">
                        <label className="text-base font-bold text-black pb-1.5">رمز عبور</label>
                        <Field className="w-full text-right h-11 pr-3 mt-4 bg-white text-black border border-solid border-black-800 rounded-3xl text-black" name="password" placeholder="رمز عبور خود را وارد کنید" />
                        <ErrorMessage name="password" component={"p"} className="error"/>
                      </div>
                      <div className="h-full max-w-96 flex justify-between my-4 mx-0 text-right">
                        <div className="flex items-center gap-1.5">
                          <label htmlFor="rememberPassInput" className="text-xs font-bold text-black text-left ">مرا به خاطر بسپار</label>
                          <Field id="rememberPassInput" type="checkbox" className="items-right rounded w-4 text-right text-black :" name="rememberPass"/>
                        </div>
                        <NavLink to="/Forget-Password" className="border-none bg-slate-100 px-4 py-2 rounded-full cursor-pointer text-blue-700 text-xs font-bold tracking-tight"> رمز عبور را فراموش کرده اید؟</NavLink>
                        <ErrorMessage name="rememberPass" component={"p"} className="error"/>
                      </div>
                    
                      <NavLink to="/Login-Page2" className="h-11 max-w-96 overflow-hidden flex">
                        <button  className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-bold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">ورود به حساب</button>
                      </NavLink>
                      <div className="mt-2 max-w-96 flex justify-center gap-1.5">
                        <h1 className="red text-black text-sm font-extrabold ">حساب کاربری ندارید؟</h1>
                        <NavLink to="/Register" className="border-none cursor-pointer text-blue-700 text-sm font-bold tracking-tight decoratio underline" type="submit">ایجاد حساب کاربری</NavLink>
                      </div>
                      <div className="flex max-w-96  justify-center mt-8">
                        <div className="mt-2 flex rounded-full justify-center gap-1.5 w-36 px-4 py-2 bg-slate-100">
                          <NavLink to="/" className="border-non  cursor-pointer text-blue-700 text-sm font-bold tracking-tight"> صفحه اصلی </NavLink>
                          <img src="https://img.icons8.com/?size=64&id=Gc9qmZNN9yFN&format=png" className="w-5 text-black text-sm font-extrabold "></img>
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

export { Login }