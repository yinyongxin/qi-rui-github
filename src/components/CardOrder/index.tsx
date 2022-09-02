import { FC } from "react"
import { CardOrderPropType } from "./types"
import styles from './styles.module.less'

const CardOrder: FC<CardOrderPropType> = ({ orderInfo }) => {
  return (
    <div className={styles.cardOrder}>
      <div className={styles.cardLeft}>
        <div className={styles.cardTitle}>
          {orderInfo.title}
        </div>
        <div className={styles.cardDetail}>
          {orderInfo.detail}
        </div>
        <div className={styles.cardFault}> {orderInfo.fault}</div>
        <div className={styles.cardTime}> {orderInfo.time}</div>
      </div>
      <div className={styles.cardRight}>
        <div>
          <div className={styles.proportion}> {orderInfo.proportion}</div>
          <div className={styles.reason}>
            {orderInfo.reason}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardOrder