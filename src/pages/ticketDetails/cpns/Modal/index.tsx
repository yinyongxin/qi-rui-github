import { orderContext } from '@/pages/ticketDetails';
import { getOrderStatus } from '@/utils/tools/orderStatus';
import { Modal } from 'qirui-digitization-ui';
import { DrawerHandle } from 'qirui-digitization-ui/dist/Drawer/interface';
import { ModalHandle } from 'qirui-digitization-ui/dist/Modal/interface';
import React, { FC, forwardRef, ForwardRefRenderFunction, useContext, useImperativeHandle, useRef, useState } from 'react';
import { ModalPropsType, ModalRefType } from '../CardWork/types';
import styles from './index.module.less';
const DrawerWork = (props: ModalPropsType, ref: any) => {
  const contextValue = useContext(orderContext)
  const ModalRef = useRef<ModalHandle>()
  const initOpen = () => {
    ModalRef.current?.open()
  }
  const getOrderStatusFun = getOrderStatus(contextValue.role, contextValue.orderStatus)
  const titleStatus = () => {
    switch (getOrderStatusFun) {
      case 1:
        return '确认要派发此工单方案吗'
      case 2:
        return '确认要撤回此工单吗？'
      case 3:
        return "确认要执行此工单方案吗？"
      case 4:
        return "确认要执行此工单方案吗？"
      case 5:
        return '确认审核通过吗？'
      default:
        return '确认审核通过吗？'
    }
  }

  const processWorkOrders = () => {
    if (contextValue.overrule) {
      contextValue.changeStatus('驳回工单')
      ModalRef.current?.close()

    }
    else {
      switch (getOrderStatusFun) {
        case 1:
          contextValue.changeStatus('派发工单')
          ModalRef.current?.close()
          return
        case 2:
          return '确认要撤回此工单吗？'
        case 3:
          contextValue.changeStatus('执行工单')
          ModalRef.current?.close()
          return
        case 4:
          return "确认要执行此工单方案吗？"
        case 5:
          contextValue.changeStatus('执行工单')
          ModalRef.current?.close()
        default:
      }
    }

  }
  const overruleContent = () => {
    return <div>
      <div className={styles.titleOne}>
        工单驳回后，处理人将重新收到该工单处理信息
      </div>
      <div className={styles.titleTwo}>同时，该解决方案将会抄送给相关人员：</div>
      <div className={styles.titleThree}>
        李喻之、王辰彦、张奕宸、李喻之、王辰彦、张奕宸、李喻之、王辰彦、张奕宸、
        李喻之、王辰彦、张奕宸、李喻之</div>
    </div>
  }
  const modalContent = () => {
    switch (getOrderStatusFun) {
      case 1:
        return <div>
          <div className={styles.titleOne}>
            派发成功后，该工单将无法再次修改。
          </div>
          <div className={styles.titleTwo}>同时，该工单将会抄送给相关人员：</div>
          <div className={styles.titleThree}>
            李喻之、王辰彦、张奕宸、李喻之、王辰彦、张奕宸、李喻之、王辰彦、张奕宸、
            李喻之、王辰彦、张奕宸、李喻之</div>
        </div>
      case 2:
        return <div>
          <div className={styles.titleOne}>
            工单撤回后，处理人将无法收到解决方案。
          </div>
          <div className={`${styles.titleTwo} ${styles.titleTwoPad}`}>你可以在“我的工单”-“已撤回”中，找到撤回的工单</div>
        </div>
      case 3:
        return <div>
          <div className={styles.titleOne}>
            审核通过后，将关闭该工单
          </div>
          <div className={styles.titleTwo}>同时，该解决方案将会抄送给相关人员：</div>
          <div className={styles.titleThree}>
            李喻之、王辰彦、张奕宸、李喻之、王辰彦、张奕宸、李喻之、王辰彦、张奕宸、
            李喻之、王辰彦、张奕宸、李喻之</div>
        </div>
      case 4:
        return "确认要执行此工单方案吗？"
      case 5:
        return <div>
          <div className={styles.titleOne}>
            审核通过后，将关闭该工单
          </div>
          <div className={styles.titleTwo}>同时，该解决方案将会抄送给相关人员：</div>
          <div className={styles.titleThree}>
            李喻之、王辰彦、张奕宸、李喻之、王辰彦、张奕宸、李喻之、王辰彦、张奕宸、
            李喻之、王辰彦、张奕宸、李喻之</div>
        </div>
      default:
        return '审核工单'
    }
  }
  useImperativeHandle<any, ModalRefType>(ref, () => ({ initOpen }))
  return (
    <div className={styles.modal}>
      <Modal
        title={contextValue.overrule ? '确认驳回该工单方案吗？' : titleStatus()}
        ref={ModalRef}
        mountOnEnter
        onOK={() => {
          processWorkOrders()
        }}
      >
        {contextValue.overrule ? overruleContent() : modalContent()}
      </Modal>
    </div>)
}
export default forwardRef(DrawerWork)