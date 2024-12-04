import { usePDF } from 'react-to-pdf';
import style from './Payment.module.css'
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { dateConvertor } from '../../../core/services/Functions/DateMiladi';
import { DownloadOutlined } from '@ant-design/icons';

const Factor = ({course, peymentDate, paymentId}) => {
   const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
   const [showPdf, setshowPdf] = useState(false)
   const showModal = () => {
    setshowPdf(true);
  };

  const handleOk = () => {
    setshowPdf(false);
  };

  const handleCancel = () => {
    setshowPdf(false);
  };
   return (
      <div>
         <button onClick={() => {
            // toPDF()
            showModal()
            }} className={style.seeFactor}> مشاهده رسید </button>
        <Modal closeIcon={null} footer={null} width={851} open={showPdf} onOk={handleOk} onCancel={handleCancel} style={{direction: "rtl"}}>
            <div ref={targetRef}>
                <div className={style.success}> تراکنش موفق </div>
                <div className={style.enteghal}> انتقال وجه کارت به کارت </div>
                <div className={style.bigG}>
                    <div className={style.text}>تاریخ</div>
                    <div className={style.number}>{dateConvertor(peymentDate)}</div>
                </div>
                <div className={style.bigW}>
                    <div className={style.text}>مبلغ</div>
                    <div className={style.number}>{course.cost}</div>
                </div>
                <div className={style.bigG}>
                    <div className={style.text}>شناسه پرداخت</div>
                    <div className={style.number}>{paymentId}</div>
                </div>
                <div className={style.bigW}>
                    <div className={style.text}>ایدی دوره</div>
                    <div className={style.number}>{course.courseId}</div>
                </div>
                <div className={style.bigG}>
                    <div className={style.text}>نام دوره</div>
                    <div className={style.number}>{course.title}</div>
                </div>
            </div>
            <Button onClick={() => toPDF()} className={style.download} type="primary" shape="round" icon={<DownloadOutlined />} size={'large'}>
            دانلود
            </Button>
        </Modal>
      </div>
   )
}

export {Factor}