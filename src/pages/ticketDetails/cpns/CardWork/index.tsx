
import React, { FC, useRef, useState, useContext } from 'react';
import styles from './index.module.less';
import { Card } from 'qirui-digitization-ui';
import { CardWorkPropsType, DrawerWorkRefType, ModalRefType } from './types';
import { orderContext } from '../..';
import { getOrderStatus } from '@/utils/tools/orderStatus';
import { Handle, Position } from "react-flow-renderer";
const CardWork: FC<CardWorkPropsType> = ({ data }) => {
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
              data.handleOrder()
            }}>处理工单</div>
          </div>
        </div>}
      </div>
    </Card>
    <Handle
      type="source"
      position={Position.Left}
      id="a"
      style={{ top: 95, background: "#18FEFE", width: '12px', height: '12px', borderRadius: '0px', left: '-12px' }}
    // isConnectable={isConnectable}
    />
    <Handle
      type="source"
      position={Position.Left}
      id="b"
      style={{ top: 140, background: "#18FEFE", width: '12px', height: '12px', borderRadius: '0px', left: '-12px' }}
    // isConnectable={isConnectable}
    />
    <Handle
      type="source"
      position={Position.Left}
      id="c"
      style={{ top: 185, background: "#18FEFE", width: '12px', height: '12px', borderRadius: '0px', left: '-12px' }}
    // isConnectable={isConnectable}
    />
    <Handle
      type="source"
      position={Position.Right}
      id="d"
      style={{ top: 40, background: "#18FEFE", width: '12px', height: '12px', borderRadius: '0px', right: '-12px', visibility: contextValue.orderStatus === 1 ? 'hidden' : 'visible' }}
    // isConnectable={isConnectable}
    />
  </div>
}


export default CardWork;