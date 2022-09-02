
import React, { FC, useRef, useState, useContext } from 'react';
import styles from './index.module.less';
import { Card, Drawer } from 'qirui-digitization-ui';
import { DrawerHandle } from 'qirui-digitization-ui/dist/Drawer/interface';
import DrawerRight from "../Drawer";
import ModalCompends from "../Modal";
import { CardWorkPropsType, DrawerWorkRefType, ModalRefType } from './types';
import { orderContext } from '../..';
import { getOrderStatus } from '@/utils/tools/orderStatus';

const CardWork: FC<CardWorkPropsType> = ({ handleOrder }) => {
  const contextValue = useContext(orderContext)
  const ModalRef = useRef<ModalRefType>()
  const openRef = useRef<DrawerWorkRefType>()

  const [faultDetails, setFaultDetails] = useState({
    title: "左前门槛返修痕",
    reason: [
      '故障原因 一',
      '故障原因 二',
      '故障原因 三',
    ]
  })

  const onchangeOpen = () => {
    ModalRef.current?.initOpen()
  }
  return <div className={styles.cardContent}>
    <Card title={<div className={styles.cardTitle}>{faultDetails.title}</div>}>
      <div className={styles.cardSubstance}>
        <div> {faultDetails.reason.map((item, index) => {
          return <div key={index} className={styles.cardSubstanceItem}>{item}</div>
        })}</div>
        {getOrderStatus(contextValue.role, contextValue.orderStatus) === 1 && <div className={styles.cardSubstanceBottom}>
          <div className={styles.buttonContent}>
            <div className={styles.buttonLeft}>忽略</div>
            <div className={styles.buttonRight} onClick={() => {
              handleOrder()
            }}>处理工单</div>
          </div>
        </div>}
      </div>
    </Card>

  </div>
}


export default CardWork;