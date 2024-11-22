import React from 'react'
import style from './Items.module.css'
import { NavLink } from 'react-router-dom'

const ContentLeft = () => {
  return (
    <div className={style.contentLeft}>
      <div className={style.title}>
        <h1 >اطلاعات پذیرنده</h1>
      </div>
      <div className={style.img}>
        <img src='https://bpm.shaparak.ir/pgwchannel/img/ipg-defaltlogo.png' />
      </div>
      <div className={style.information}>
        <div>
          <h1> :نام پذیرنده</h1>
          <h2>React Elite</h2>
        </div>
        <div>
          <h1> :شماره پذیرنده</h1>
          <h2>12345678</h2>
        </div>
        <div>
          <h1> :شماره ترمینال</h1>
          <h2>87654321</h2>
        </div>
        <div>
          <h1> :آدرس وبسایت</h1>
          <NavLink to='/'>www.ReactElite.com</NavLink>
        </div>
      </div>
      <div className={style.price}>
        <h1>:مبلغ قابل پرداخت</h1>
        <h2>ریال90000</h2>
      </div>
    </div>
  )
}

export { ContentLeft }