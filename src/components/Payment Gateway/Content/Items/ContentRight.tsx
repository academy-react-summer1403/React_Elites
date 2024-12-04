import React, { useState } from 'react'
import style from './Items.module.css'
import { NavLink } from 'react-router-dom'
import { addCoursePayment } from '../../../../core/services/api/postAddPayment'
import toast, { Toaster } from 'react-hot-toast'

const ContentRight = ({Details}) => {

    const [value, setvalue] = useState({
        CourseId: Details?.courseId,
        Paid: Details?.cost,
        PeymentDate: new Date,
        PaymentInvoiceNumber: Math.floor(Math.random() * 100) + 100000,
    })


    const paymentValue = async () => {
        let res = await addCoursePayment(value)
        if(res.success == true){
            toast.success("پرداخت انجام شد")
        }
        console.log(value)
    }

    return (
        <div className={style.contentRight}>
            <Toaster />
            <div className={style.title}>
                <h1>اطلاعات کارت</h1>
            </div>

            <div className={style.container}>
                <input className={style.cvv2} />
                <div>
                    <h1>شماره کارت</h1>
                    <p>شماره کارت 16 رقمی درج شده روی کارت را وارد نمایید</p>
                </div>
            </div>

            <div className={style.container}>
                <input className={style.cvv2} />
                <div>
                    <h1>شماره شناسایی دوم (CVV2)</h1>
                    <p>شماره 3 یا 4 رقمی درج شده روی کارت را وارد نمایید</p>
                </div>
            </div>

            <div className={style.container}>
                <div className={style.InputsHolder}>
                    <input placeholder='ماه' className={style.Input2} />
                    <input placeholder='سال' className={style.Input2} />
                </div>
                <div>
                    <h1>تاریخ انقضای کارت </h1>
                    <p>تاریخ انقضای کارت را وارد کنید</p>
                </div>
            </div>

            <div className={style.container}>
                <input className={style.cvv2} />
                <div>
                    <h1> کد امنیتی</h1>
                    <p>لطفا کد امنیتی داخل کادر را وارد نمایید</p>
                </div>
            </div>

            <div className={style.container}>
                <input className={style.cvv2} />
                <div>
                    <h1>رمز اینترنتی کارت</h1>
                    <p>رمز اینترنتی را وارد نمایید</p>
                </div>
            </div>

            <div className={style.container}>
                <input className={style.cvv2} />
                <div>
                    <h1>ایمیل </h1>
                    <p>لطفا ایمیل معتبر وارد کنید (اختیاری)</p>
                </div>
            </div>

            <div className={style.Confirm}>
                <div>
                    <label htmlFor='saveCart'>ذخیره کارت برای استفاده‌های بعدی</label>
                    <input type="checkbox" id='saveCart' />
                </div>
                <div>
                    <button onClick={() => paymentValue()}>پرداخت</button>
                    <NavLink to='/Student-Panel/Shopping-Basket'>انصراف</NavLink>
                </div>
            </div>

        </div>
    )
}

export { ContentRight }