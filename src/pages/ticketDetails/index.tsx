
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Position
} from "react-flow-renderer";
import ColorSelectorNode from './cpns/ColorSelectorNode';
const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];


export const orderContext = React.createContext({
  role: 1,
  changeStatus: (e: string) => { },
  orderStatus: 1,
  overrule: false
});
const nodeTypes = {
  selectorNode: CardWork,
  cardOrderNode: CardOrder,
  workStatusNode: WorkStatus,

};
const TicketDetails = () => {

  const ModalRef = useRef<ModalRefType>()
  const openRef = useRef<DrawerWorkRefType>()
  const [role, setRole] = useState(1)
  const [orderStatus, setOrderStatus] = useState(1)
  const [overrule, setOverrule] = useState(false)
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
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
    console.log(str);

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

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );
  const getLeftList = () => {
    let nodeArr = [
      {
        id: "1",
        type: "selectorNode",
        data: { handleOrder: handleOrder },
        position: { x: 809, y: 150 },

      },
      {
        id: "2",
        type: "cardOrderNode",
        data: { orderInfo: orderDetail[0] },
        position: { x: 165, y: 0 },

      },
      {
        id: "3",
        type: "cardOrderNode",
        data: { orderInfo: orderDetail[0] },
        position: { x: 165, y: 201 },
        targetPosition: Position.Right,

      },
      {
        id: "4",
        type: "cardOrderNode",
        data: { orderInfo: orderDetail[0] },
        position: { x: 165, y: 401 },
        targetPosition: Position.Right,

      },
      {
        id: "5",
        type: "workStatusNode",
        data: { orderStatusChange: orderStatusChange },
        position: { x: 1350, y: 200 },
        targetPosition: Position.Right,
      }
    ]
    let edgesArr = [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: false,
        sourceHandle: "a",
        style: { stroke: "##18FEFE" }
      },
      {
        id: "e1b-3",
        source: "1",
        target: "3",
        sourceHandle: "b",
        animated: false,
        style: { stroke: "##18FEFE" }
      },
      {
        id: "e1c-4",
        source: "1",
        target: "4",
        sourceHandle: "c",
        animated: false,
        style: { stroke: "##18FEFE" }
      },
      {
        id: "e1d-5",
        source: "1",
        target: "5",
        sourceHandle: "d",
        animated: false,
        style: { stroke: "#18FEFE" }
      }
    ]
    if (getOrderStatusFun === 1) {
      nodeArr.splice(nodeArr.length - 1, 1)
      edgesArr.splice(nodeArr.length - 1, 1)
      setNodes(nodeArr);
      setEdges(edgesArr);
    }
    else {
      setNodes(nodeArr);
      setEdges(edgesArr);
    }


  }
  useEffect(() => {
    getLeftList()
  }, [getOrderStatusFun])





  return (
    <div className={styles.TicketDetails}>
      <TitleNav></TitleNav>
      <div className={styles.orderDetail}>
        {/* <div className={styles.orderLeft}>
          {orderDetail.map((item, index) => {
            return <CardOrder orderInfo={item} key={index}></CardOrder>
          })}
        </div> */}
        <orderContext.Provider value={{
          changeStatus,
          role,
          orderStatus,
          overrule
        }}>
          {/* <CardWork handleOrder={handleOrder} /> */}
          <div style={{ width: '100%', height: '700px', }} className={styles.reactFlow}>
            <ReactFlow
              defaultNodes={nodes}
              defaultEdges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              style={{ background: "#0a0a0a" }}
              nodeTypes={nodeTypes}
              connectionLineStyle={connectionLineStyle}
              snapToGrid={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              fitView={false}

            ></ReactFlow>
          </div>
          {/* {getOrderStatusFun !== 1 && } */}
          {/* < WorkStatus orderStatusChange={orderStatusChange} /> */}
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
