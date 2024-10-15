
import React, { useEffect, useState } from 'react'
import  styleLogin  from "../../Style/list.module.css";
const Dashboard = () => {

    return (
      <div className='flex flex-row-reverse bg-black w-full h-screen'>
        <div className='flex  flex-col  justify-ens justify-items-start bg-cyan-300 w-1/4 '>
          <div className='items-right'>داشبورد</div>
          <div className='items-right'>دوره من </div>
          <div className='items-right'>رزرو من </div>
          <div className='items-right'>دوره های مورد علاقه</div>
          <div className='items-right'>بلاگ های مورد علاقه</div>
          <div className='items-right'>پروفایل</div>
          <div className='items-right'> پرداخت ها </div>

        </div>
<div className='flex justify-start bg-white rounded	m-5 w-3/4'>
           <div>
            <div> سلام پارسا روزت بخیر</div>
            <div> سلام ، من پارسام اینم بیو پروفایلمه واقعا نمیدونم چی بنویسم خودتون بیایید منو بشناسید حال ندارم بخدا خستمر</div>
            <div></div>
           </div>
           <div></div>
           <div></div>

</div>
      </div>
    )
  }
  
  export { Dashboard }
  