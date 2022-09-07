
import React, { FC, useContext } from 'react';
import styles from './index.module.less';
import { Card } from 'qirui-digitization-ui';
import { orderContext } from '../..';
import { getOrderStatus } from '@/utils/tools/orderStatus';
type WorkStatusPropsType = {
  data: { orderStatusChange: () => void }
};
import { Handle, Position } from "react-flow-renderer";
const WorkStatus: FC<WorkStatusPropsType> = ({ data }) => {
  const contextValue = useContext(orderContext)
  const getOrderStatusFun = getOrderStatus(contextValue.role, contextValue.orderStatus)
  const cardTitle = () => {
    switch (getOrderStatusFun) {
      case 1:
        return '工单状态：已发送至处理人'
      case 2:
        return '确认要撤回此工单吗？'
      case 3:
        return '工单状态：待处理'
      case 4:
        return '工单状态：待审核'
      case 5:
        return '工单状态：审核'
      case 7:
        return '工单状态：已驳回'
      default:
        return ""
    }
  }
  const planView = () => {
    data.orderStatusChange()
  }
  const contentText = () => {
    switch (getOrderStatusFun) {
      case 1:
        return "待处理人进行工单处理"
      case 2:
        return "待处理人进行工单处理"
      case 3:
        return "待处理人进行工单处理"
      case 4:
        return "已提交工单方案，待责任人审核"
      case 5:
        return "处理人已提交工单方案，待审核"
      case 7:
        return "你已驳回该方案，待执行人处理"
      default:
        return "已审核通过，该工单已完成"
    }
  }
  const footButton = () => {
    switch (getOrderStatusFun) {
      case 1:
        return <div className={styles.cardSubstanceBottom}>
          <div className={styles.buttonRight} onClick={() => {
            planView()
          }}>查看方案</div>
        </div>
      case 2:
        return <div className={styles.cardSubstanceBottom}>
          <div className={styles.buttonRight} onClick={() => {
            planView()
          }}>查看方案</div>
        </div>
      case 3:
        return <div className={styles.cardSubstanceBottom}>
          <div className={styles.buttonLeft} onClick={() => {
          }}>忽略</div>
          <div className={styles.buttonRight} onClick={() => {
            planView()
          }}>处理工单</div>
        </div>
      case 4:
        return <div className={styles.cardSubstanceBottom}>
          <div className={styles.buttonRight} onClick={() => {
            planView()
          }}>查看方案</div>
        </div>
      case 5:
        return <div className={styles.cardSubstanceBottom}>
          <div className={styles.buttonRight} onClick={() => {
            planView()
          }}>去审核</div>
        </div>
      case 7:
        return <div className={styles.cardSubstanceBottom}>
          <div className={styles.buttonRight} onClick={() => {
            planView()
          }}>查看方案</div>
        </div>
      default:
        return ""
    }
  }

  // 内容
  return (
    <Card title={<div className={styles.cardTitle}>{cardTitle()}</div>}>
      <div className={styles.cardContent}>
        <div className={styles.contentText}>{contentText()}</div>
        <div >
          {footButton()}
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        style={{ top: 140, background: "#18FEFE", width: '12px', height: '12px', borderRadius: '0px', left: '-13px' }}
      />
    </Card>
  );
};

export default WorkStatus;