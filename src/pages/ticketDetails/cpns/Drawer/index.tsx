import React, { FC, forwardRef, ForwardRefRenderFunction, useContext, useImperativeHandle, useRef, useState } from 'react';
import { Drawer, Input } from 'qirui-digitization-ui';
import { DrawerHandle } from 'qirui-digitization-ui/dist/Drawer/interface';

import { DrawerPropsType, DrawerWorkRefType, ModalRefType, ProgramDetailType, ProgramListPropsType } from '../CardWork/types';
import styles from './index.module.less';
import { orderContext } from '@/pages/ticketDetails';
import { getOrderStatus } from '@/utils/tools/orderStatus';
// 渲染方案列表
const ProgramList: FC<ProgramListPropsType> = ({ programDetail }) => {
  return <div className={styles.cardOrder}>
    <div className={styles.cardLeft}>
      <div className={styles.cardTitle}>
        <div>方案编号：</div>
        <div>{programDetail.title}</div>
      </div>
      <div className={styles.cardDetail}>
        <div>方案描述：</div>
        <div> {programDetail.detail}</div>
      </div>
    </div>
    <div className={styles.cardRight}>
      <div>
        <div className={styles.proportion}> {programDetail.proportion}</div>
        <div className={styles.reason}>
          {programDetail.reason}
        </div>
      </div>
    </div>
  </div>
}
const DrawerWork = (props: DrawerPropsType, ref: any) => {
  // context顶级组件传过来的
  const contextValue = useContext(orderContext)
  const DrawerRef = useRef<DrawerHandle>()
  const [programStatus, setProgramStatus] = useState(true)
  const [programDetail, setProgramDetail] = useState<ProgramDetailType[]>(
    [
      {
        title: 'PR032456',
        detail: '为消除故障和故障隐患，恢复汽车总成规定的技术状况或工作能力，对损伤的零部件和总成进行修复或更换的作业总称。目的是补偿和恢复有形磨损，延长汽车的使用寿命。',
        proportion: '82%',
        reason: '故障原因可能性'
      },
      {
        title: 'PR032456',
        detail: '为消除故障和故障隐患，恢复汽车总成规定的技术状况或工作能力，对损伤的零部件和总成进行修复或更换的作业总称。目的是补偿和恢复有形磨损，延长汽车的使用寿命。',
        proportion: '82%',
        reason: '故障原因可能性'
      },
    ]
  )
  const getOrderStatusFun = getOrderStatus(contextValue.role, contextValue.orderStatus)
  const putAwaySvg = () => {
    return <svg width="55" height="24" viewBox="0 0 55 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.6" d="M34.686 8.97V9.964H40.37V8.97H34.686ZM35.078 6.24C34.672 8.69 33.93 10.972 32.726 12.4C32.95 12.596 33.328 13.058 33.482 13.282C34.798 11.63 35.666 9.138 36.142 6.422L35.078 6.24ZM38.354 9.474C37.696 13.842 36.226 16.698 32.964 18.28C33.188 18.49 33.51 18.924 33.636 19.148C37.024 17.314 38.606 14.304 39.39 9.614L38.354 9.474ZM35.078 9.852L34.21 10.048C35.148 14.094 36.87 17.482 39.754 19.064C39.922 18.798 40.258 18.42 40.496 18.21C37.682 16.824 35.932 13.576 35.078 9.852ZM31.522 6.45V19.134H32.572V6.45H31.522ZM28.288 16.6C28.582 16.376 29.03 16.138 32.264 14.99C32.18 14.766 32.054 14.36 32.012 14.08L28.652 15.172L28.176 15.606L28.288 16.6ZM28.288 16.6C28.288 16.222 29.366 15.634 29.366 15.634V7.808H28.344V14.696C28.344 15.242 28.05 15.522 27.854 15.648C28.008 15.872 28.204 16.348 28.288 16.6ZM42.036 7.822V8.774H47.65V7.822H42.036ZM49.078 10.79V11.714H53.194V10.79H49.078ZM41.672 10.538V11.49H48V10.538H41.672ZM45.088 13.562V14.5H47.874V13.562H45.088ZM44.374 6.268V11.028H45.368V6.268H44.374ZM44.612 11.182V17.608H45.592V11.182H44.612ZM48.532 6.912V7.85H52.648V12.078H53.67V6.912H48.532ZM48.672 10.79V15.368C48.672 16.558 49.064 16.852 50.366 16.852C50.646 16.852 52.536 16.852 52.83 16.852C54.034 16.852 54.328 16.348 54.468 14.346C54.174 14.276 53.74 14.108 53.516 13.94C53.46 15.62 53.362 15.9 52.76 15.9C52.34 15.9 50.772 15.9 50.464 15.9C49.806 15.9 49.68 15.816 49.68 15.368V10.79H48.672ZM43.17 14.234L42.4 14.486C43.31 18.014 44.976 18.77 48.77 18.77H54.146C54.216 18.462 54.412 17.972 54.58 17.734C53.712 17.762 49.428 17.762 48.742 17.762C45.494 17.762 43.926 17.16 43.17 14.234ZM42.386 12.596C42.33 15.088 42.176 17.342 41.364 18.742C41.602 18.854 42.064 19.106 42.246 19.246C43.086 17.678 43.282 15.354 43.366 12.666L42.386 12.596Z" fill="white" />
      <path d="M17 14L12 9L7 14" stroke="white" strokeOpacity="0.8" />
    </svg>
  }
  const initOpen = () => {
    DrawerRef.current?.open()
  }
  const handlingEvents = () => {
    props.onchangeOpen()
    DrawerRef.current?.close()
  }
  const titleStatus = () => {
    const getOrderStatusFun = getOrderStatus(contextValue.role, contextValue.orderStatus)
    switch (getOrderStatusFun) {
      case 1:
        return '处理工单'
      case 2:
        return '工单解决方案'
      case 3:
        return '选择执行方案'
      case 4:
        return '工单解决方案'
      default:
        return '审核工单'
    }
  }
  const leftButton = () => {
    switch (getOrderStatusFun) {
      case 1:
        return <div className={styles.distribute} onClick={handlingEvents}>点击派发</div>
      case 2:
        return <div className={styles.distribute} onClick={handlingEvents}>撤回</div>
      case 3:
        return <div className={styles.distribute} onClick={handlingEvents}>执行工单</div>
      case 4:
        return <div className={styles.distribute} onClick={handlingEvents}>关闭弹窗</div>
      case 5:
        return <div className={`${styles.distribute} ${styles.distributePass}`} onClick={handlingEvents}>审核通过</div>
      default:
        return <div onClick={handlingEvents}></div>
    }
  }
  useImperativeHandle<any, DrawerWorkRefType>(ref, () => ({ initOpen }))
  return (<div className={styles.drawer}>
    <Drawer
      title={titleStatus()}
      ref={DrawerRef}
      width={640}
      footer={(
        <div className={styles.foot}>
          <div>{leftButton()}</div>
          {getOrderStatusFun === 5 && <div className={`${styles.distribute} ${styles.distributePass}`} onClick={() => {
            props.onOverrule()
            handlingEvents()
          }}>驳回</div>}
          {getOrderStatusFun != 4 && <div className={styles.cancel}>取消</div>}
        </div>
      )}
      footerBorder={false}
    >
      <div className={styles.RecommendedContent}>
        <div className={styles.Recommended}>{getOrderStatusFun === 4 ? "已选择的执行方案" : '推荐解决方案（可多选）'}</div>
        <div onClick={() => setProgramStatus(!programStatus)}>
          {putAwaySvg()}
        </div>
      </div>
      {programStatus && <div className={styles.drawerList}>
        {
          programDetail.map((item, index) => {
            return <div key={index}>
              <ProgramList programDetail={item} ></ProgramList>
            </div>
          })
        }
      </div>}
      {getOrderStatusFun === 1 || getOrderStatusFun === 2 && <div>
        <div className={styles.customPlan}>
          自定义方案
        </div>
        <div className={styles.input}>

          <textarea placeholder='点此输入方案内容' style={{ resize: "none" }} ></textarea>
        </div>
      </div>}
    </Drawer>

  </div>)
}
export default forwardRef(DrawerWork)