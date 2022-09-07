import { FC } from "react"
import { CardOrderPropType } from "./types"
import styles from './styles.module.less'
import { Handle, Position } from "react-flow-renderer"

const CardOrder: FC<CardOrderPropType> = ({ data }) => {
  return (
    <div className={styles.cardOrder}>
      <div className={styles.cardLeft}>
        <div className={styles.cardTitle}>
          {data.orderInfo.title}
        </div>
        <div className={styles.cardDetail}>
          {data.orderInfo.detail}
        </div>
        <div className={styles.cardFault}> {data.orderInfo.fault}</div>
        <div className={styles.cardTime}> {data.orderInfo.time}</div>
      </div>
      <div className={styles.cardRight}>
        <div>
          <div className={styles.proportion}> {data.orderInfo.proportion}</div>
          <div className={styles.reason}>
            {data.orderInfo.reason}
          </div>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Right}
        style={{ top: 30, background: "#18FEFE", width: '12px', height: '12px', borderRadius: '0px', right: '-12px' }}
      // isConnectable={isConnectable}
      />
    </div>
  )
}

export default CardOrder