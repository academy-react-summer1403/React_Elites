import style from './Payment.module.css'
import { ReservedCourses } from '../Payment Items/Reserved Courses/Reserved Courses Holder/ReservedCourses'
import { Modal } from 'antd'
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import { getPaymentList } from '../../../core/services/api/getPaymentList';
import { columnPayment } from './column';

const Payment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentList, setpaymentList] = useState([])

  const getPaymentListCall = async () => {
    let res = await getPaymentList()
    setpaymentList(res)
  }

  useEffect(() => {
    getPaymentListCall()
  }, [])
  

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={style.payment}>
      <div className={style.seePaymentHolder}>
        <div onClick={showModal} className={style.seePayment} > مشاهده لیست </div>
      </div>
        <Modal className={style.modal} closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <DataTable
            data={paymentList}
            columns={columnPayment}
            className='react-dataTable'
            responsive={true}
            highlightOnHover={true}
          />
        </Modal>
        <ReservedCourses />
    </div>
  )
}

export {Payment}