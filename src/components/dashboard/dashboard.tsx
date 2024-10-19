import {  Formik  } from "formik";
import style from "./../../Style/studentPanel.module.css";
import {StudentGhabRight} from "../studentPanel/studentPart/studentRight";
import {StudentGhabLeft} from "../studentPanel/studentPart/studentLeft";
import Chart from 'react-apexcharts';



const Dashboard1 = () => {
/* const options = {
    series: [2, 4],
    labels: ["ref","gdfs"],
  };*/

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
                            <div className=" text-black font-bold text-2xl"> سلام پارسا،روزت بخیر</div> 
                            <div className=" text-black">سلام من پارسام این بیو پروفایلمه</div> 
                            </div>
                         <div className="flex flex-row mt-3.5"> 
                            <div className="bg-[#F6F6F6]  w-3/5 h-44 rounded-lg">
                                <div className="text-black"> دوره ی من </div>
                                <div className="flex flex-row  text-black bg-[#F1F1F1] rounded-lg mx-2.5 items-center	justify-start space-x-9">
                                  <div>#</div>
                                  <div>نام </div>
                                  <div>مدرس</div>
                                  <div>تاریخ برگذاری </div>
                                  <div>سطح</div>
                                </div>
                                <div className=""></div>
                            </div>
                          
                            <div className="flex flex-row mr-5 rounded-lg text-black bg-slate-200"> وضعیت اطلاعات حساب کاربری
                           <Chart 
                           options={{
                            chart: {
                              id: "basic-donut",
                            },
                            labels: ["تکمیل شده ", "تکمیل نشده"],
                          }}
                          series={[30, 70]}
                          type="donut"
      />

                            
                            </div>
                         </div>
                         <div className=" mt-5 flex flex-row"> 
                           <div className="w-3/5 bg-[#F6F6F6] h-48 rounded-lg">
                              <div className="text-black">رزومه من </div>
                              <div className="flex flex-row  bg-[#F1F1F1] text-black rounded-lg  mx-3 items-center	justify-start space-x-20 ">
                                <div className="">#</div>
                                <div className="pr-20">نام</div>
                                <div className="pr-20">مدرس</div>
                                <div className="pr-20">وضعیت</div>
                              </div>
                              <div className="">
                              <div className="flex flex-row text-black mt-2.5">
                                <div className="pr-20 font-bold">دوره فیگما</div>
                                <div className="pr-20">محمد حسن خلیل پور</div>
                                <div className="pr-3 bg-red-800 mr-24 text-white rounded-full">تائید نشده</div></div>
                                
                              </div>
                           </div>
                           <div className="">للل
                              
                           </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </Formik>

  )
}

export {Dashboard1 }