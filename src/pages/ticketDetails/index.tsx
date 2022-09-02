
import React, { useRef, useState } from 'react';
import styles from './styles.module.less';
import { Card, Page, Title } from 'qirui-digitization-ui';
import TitleNav from './cpns/Title';
import CardWork from './cpns/CardWork';
import WorkStatus from './cpns/WorkStatus';
import CardOrder from '@/components/CardOrder';
import DrawerRight from "./cpns/Drawer";
import ModalCompends from "./cpns/Modal";
import { DrawerWorkRefType, ModalRefType } from './cpns/CardWork/types';
import { getOrderStatus } from '@/utils/tools/orderStatus';
export const orderContext = React.createContext({
  role: 1,
  changeStatus: (e: string) => { },
  orderStatus: 1,
  overrule: false
});
const TicketDetails = () => {
  const ModalRef = useRef<ModalRefType>()
  const openRef = useRef<DrawerWorkRefType>()
  const [role, setRole] = useState(1)
  const [orderStatus, setOrderStatus] = useState(1)
  const [overrule, setOverrule] = useState(false)

  const getOrderStatusFun = getOrderStatus(role, orderStatus)
  const [orderDetail, setOrderDetail] = useState(
    [
      {
        title: '整车产量过低',
        detail: 'XX线在10：00-14：00区间段，产量为0',
        fault: '故障编号：DX20220407',
        time: '2022-03-24 18:56:58',
        proportion: '82%',
        reason: '故障原因可能性'
      },
      {
        title: '整车产量过低',
        detail: 'XX线在10：00-14：00区间段，产量为0',
        fault: '故障编号：DX20220407',
        time: '2022-03-24 18:56:58',
        proportion: '82%',
        reason: '故障原因可能性'
      },
      {
        title: '整车产量过低',
        detail: 'XX线在10：00-14：00区间段，产量为0',
        fault: '故障编号：DX20220407',
        time: '2022-03-24 18:56:58',
        proportion: '82%',
        reason: '故障原因可能性'
      },
    ]
  )
  const changeStatus = (str: string) => {
    if (str === '派发工单' || str === '执行工单') {
      setOrderStatus(2)
    }
    else {
      setOrderStatus(3)
    }

  }
  // 驳回
  const onOverrule = () => {
    setOverrule(true)
  }
  const onchangeOpen = () => {
    ModalRef.current?.initOpen()
  }
  const handleOrder = () => {
    openRef.current?.initOpen()
  }
  const orderStatusChange = () => {
    openRef.current?.initOpen()
  }

  return (
    <div className={styles.TicketDetails}>
      <TitleNav></TitleNav>
      <div className={styles.orderDetail}>
        <div className={styles.orderLeft}>
          {orderDetail.map((item, index) => {
            return <CardOrder orderInfo={item} key={index}></CardOrder>
          })}
        </div>
        <orderContext.Provider value={{
          changeStatus,
          role,
          orderStatus,
          overrule
        }}>
          <CardWork handleOrder={handleOrder} />
          {getOrderStatusFun !== 1 && < WorkStatus orderStatusChange={orderStatusChange} />}
          <div className={styles.drawer}>
            <DrawerRight ref={openRef} onchangeOpen={onchangeOpen} onOverrule={onOverrule}></DrawerRight>
          </div>
          <ModalCompends ref={ModalRef} onchangeOpen={onchangeOpen}></ModalCompends>
        </orderContext.Provider>


      </div>

    </div>
  );
};

export default TicketDetails;
