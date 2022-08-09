import { FC } from "react"
import { ExempleComponentPropType } from "./types"
import styles from './styles.module.less'

const RightInfo: FC<ExempleComponentPropType> = () => {
  return (
    <div className={styles.rightInfo}>
      RightInfo
    </div>
  )
}

export default RightInfo