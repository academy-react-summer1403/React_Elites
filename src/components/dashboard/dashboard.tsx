import { Formik } from "formik";
import style from "./../../Style/studentPanel.module.css";
import { StudentGhabRight } from "../studentPanel/studentPart/studentRight";
import { StudentGhabLeft } from "../studentPanel/studentPart/studentLeft";
import Chart from 'react-apexcharts';
import  { useState, useEffect } from 'react';
import moment from 'jalali-moment';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { TbClock } from "react-icons/tb";






const Dashboard1 = () => {
  const series = [30, 70]; // مقادیر سری
  const displayValue = series[1]; // مقدار 70 برای نمایش
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // فرمت زمان به زبان فارسی
      const formattedTime = now.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false });
      
      // فرمت تاریخ شمسی با نام ماه و اعداد فارسی
      const formattedDate = moment(now).locale('fa').format(' DD MMMM YYYY ');
      
      // تبدیل اعداد تاریخ به فارسی
      const persianDate = formattedDate.replace(/\d/g, (digit) => String.fromCharCode(digit.charCodeAt(0) + 1728));
      
      setTime(formattedTime);
      setDate(persianDate);
    };

    updateTime(); // Update the time and date immediately on mount
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Formik>
      {(form) => (
        <div className={style.root}>
          <StudentGhabRight />
          <div className={style.left}>
            <StudentGhabLeft />
            <div className={style.page}>
              <div className={style.page2}>
                <div className="flex flex-row">
                  <div className="text-black font-bold text-2xl">سلام پارسا، روزت بخیر 
                  <div className="flex flex-row">
                    <div className="flex flex-row">
                    
                    <TbClock />
                    <h1> {time} </h1>
                    
                    </div>
                    <div className="flex flex-row">
                    <SlCalender />
                    <h2> {date} 
</h2>  </div></div>
                    </div>
                  <div className="text-black ms-96">سلام من پارسام این بیو پروفایلمه</div>
                </div>
                <div className="flex flex-row mt-3.5">
                  <div className="bg-[#F6F6F6] w-3/5 h-44 rounded-lg">
                    <div className="text-black">دوره ی من</div>
                    <div className="flex flex-row text-black bg-[#F1F1F1] rounded-lg mx-2.5 items-center justify-start space-x-9">
                      <div className="pr-19">#</div>
                      <div className="pr-20">نام</div>
                      <div className="pr-16">مدرس</div>
                      <div className="pr-16">تاریخ برگزاری</div>
                      <div className="pr-16">سطح</div>
                    </div>
                  </div>
                
                  <div className="flex flex-row mr-5 rounded-lg text-black bg-slate-200">
                    وضعیت اطلاعات حساب کاربری
                    
                  
                    <div className="relative flex items-center justify-center" style={{ width: '200px', height: '100px' }}>
                      <Chart
                        options={{
                          chart: {
                            id: "basic-donut",
                          },
                          labels: ["آمار انبار 1", "آمار انبار 2"],
                          legend: {
                            show: false,
                          },
                          colors: ['#FFD700', '#FFC107'],
                          stroke: {
                            width: 2,
                          },
                          plotOptions: {
                            pie: {
                              donut: {
                                size: '80%',
                              },
                            },
                          },
                          dataLabels: {
                            enabled: false,
                          },
                        }}
                        series={series}
                        type="donut"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                        {displayValue}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex flex-row">
                  <div className="w-3/5 bg-[#F6F6F6] h-48 rounded-lg">
                    <div className="text-black">رزومه من</div>
                    <div className="flex flex-row bg-[#F1F1F1] text-black rounded-lg mx-3 items-center justify-start space-x-20">
                      <div className="">#</div>
                      <div className="pr-20">نام</div>
                      <div className="pr-20">مدرس</div>
                      <div className="pr-20">وضعیت</div>
                    </div>
                    <div className="flex flex-row text-black mt-2.5">
                      <div className="pr-20 font-bold">دوره فیگما</div>
                      <div className="pr-20">محمد حسن خلیل پور</div>
                      <div className="pr-3 bg-red-800 mr-24 text-white rounded-full">تائید نشده</div>
                    </div>
                  </div>
                  <div className="">cvvc
                
                  <div className="flex">
                    {/* خط و متن در اینجا */}
                    <div className="flex flex-row content-center items-center justify-center pr-24">
                      <div className="flex-grow h-px  w-12 bg-black"></div>
                      <span className=" text-gray-700  px-2">دوره ها و بلاگ ها</span>
                      <div className="flex-grow h-px  w-12 bg-black"></div>
                      </div>
                      
                    </div>
                    <div className="flex flex-row">  
                     
                      <div className="w-7"><img src="https://www.shareicon.net/data/256x256/2016/05/24/770117_people_512x512.png" alt="new"/></div> 
                      <div className="text-black  text-sm font-semibold  ">  شما</div>  
                      </div>
                      <div className="text-black pr-2 font-DannaBold text-base font-bold">دوره خیلی خوبی بود واقعا لذت بردم</div>
                      <div className="  text-black lg:text-red-500 pr-4 text-sm font-DannaNormal ">واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن </div>
                      <div className=" text-black  flex flex-row"><AiOutlineLike size={22}/><AiOutlineDislike size={22}/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export { Dashboard1 };